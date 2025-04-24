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
    localStorage.setItem("authType", "local");
    let response = fetch('http://localhost:5000/createUser', {
        method: "POST",
        credentials: 'include',
        body: userData
        });
    return (await response).json();
}

export {getSessionUser, createUser};