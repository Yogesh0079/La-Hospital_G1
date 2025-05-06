async function getSessionUser () {
    let auth_type = localStorage.getItem("authType");
    if (auth_type == "session") {
      let response = fetch('http://localhost:5000/authSession', {
        credentials: 'include',
      });
      return (await response).json()
    }
    else if (auth_type == "local") {
    let response = fetch('http://localhost:5000/authLocal', {
        credentials: 'include',
        });
        return (await response).json()
    }
}
async function createUser (userData) {
    console.log(userData);
    localStorage.setItem("authType", "local");
    let response = fetch('http://localhost:5000/createUser', {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        });
    return (await response).json().then(window.location.href("/dashboard")).catch((err) => {window.location.href("")});
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
      return (await response).json().then((res) => console.log(res));
}

export {getSessionUser, createUser, loginUser};