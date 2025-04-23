async function getSessionUser () {
    let auth_type = localStorage.getItem("authType");
    if (auth_type == "session") {
      let response = fetch('http://localhost:5000/auth', {
        credentials: 'include',
      });
      return (await response).json()
    }
}

export {getSessionUser};