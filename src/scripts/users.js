async function getSessionUser () {
    let auth_type = localStorage.getItem("authType");
    if (auth_type == "session") {
      let response = fetch('http://localhost:5000/authSession', {
        credentials: 'include',
      });
      return (await response).json()
    }
    // else if (auth_type == "local") {
    // let response = fetch('http://localhost:5000/authLocal', {
    //     credentials: 'include',
    //     });
    //     return (await response).json()
    // }
}
async function createUser (userData) {
    // console.log(userData);
    localStorage.setItem("authType", "local");
    let response = fetch('http://localhost:5000/createUser', {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        });
    return (await response).json();
}

async function loginUser(userData) {
    localStorage.setItem("authType", "local");
    console.log(userData)
    let response = fetch('http://localhost:5000/login', {
      method: "POST",
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
      });
      return (await response).json().then((res) => {
        if (res.error) {
            return res;
        }
        localStorage.setItem("uid", res._id);
        localStorage.setItem("authType", "session");
        return res;
      });
}
async function getUserByLocalId() {
    let id = localStorage.getItem("uid");
    let response = await  fetch(`http://localhost:5000/getUser/${id}`, {
        credentials: 'include',
      });
      return (await response).json()
}
export {getSessionUser, createUser, loginUser, getUserByLocalId};