// import new_doctor from "./assets/new_doctor.png";

function Login(){
    return(
        <>
        <div className="Login">
            <form style={{display : 'flex', justifyContent: 'space-between', alignItems: "center", flexDirection: "column"}} action="localhost:5000">
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw",}} type="text" name="uname" id="login-uname-input" />
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw"}} type="email" name="email" id="login-email-input" />
                <input style={{padding: "5px", margin: "10px", backgroundColor: "white", borderRadius: "8px", marginBottom: "17px", width: "15vw"}} type="password" name="password" id="login-password-input" />
            </form>
        </div>
        </>
    )

}
export default Login