import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__title">SIGN IN</div>
                <div className="login__form">
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <button>LOGIN</button>
                    <a href="">DO NOT REMEMBER THE PASSWORD?</a>
                    <a href="">CREATE A NEW ACCOUNT</a>
                </div>
            </div>
        </div>
    )
}

export default Login
