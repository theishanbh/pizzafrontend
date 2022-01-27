import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="register__wrapper">
                <h1 className="register__title">CREATE AN ACCOUNT</h1>
                <form className="register__form">
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <p className="agreement">By creating an account, I consent to the procesing of my personal data in accordance with the <b>Privay Policy</b> </p>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Register
