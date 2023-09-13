import '../Component/login.css'
function Login()
{
    return(
        <div className="formBackground">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="loginForm">
            <form name="accessForm"  method="post"  autocomplete="off" >
                <div className="title">
                    <h3>Login Here</h3>
                  </div>
                <div className="inputGroup">
                    <label for="user">User Name:</label>
                    <input type="text" id="user" name="user" placeholder="Enter Your Name" value="" required />
                    <span id="nameError"></span>
                </div>
                
                <div className="inputGroup">
                    <label for="pwd">Password:</label>
                    <input type="password" id="pwd" name="pass"  placeholder="Password" value="" required />
                    <span id="passError"></span>
                </div>
                    
                    <input type="submit" className="submitForm" name="submit" Value="Login"  />
                <div className="social">
                    <div className="gb"><i className="fab fa-google"></i></div>
                    <div className="fb"><i className="fab fa-facebook"></i></div>
                    <div className="tw"><i className="fab fa-twitter"></i></div>
                </div>
            </form>
        </div>
    </div>
    
    )
}

export default Login;