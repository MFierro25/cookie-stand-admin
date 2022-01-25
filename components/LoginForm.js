export default function LoginForm({onLogin}) {

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(e.target.username.value, e.target.password.value)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
                <legend>Login </legend>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username"></input>

                <label htmlFor="password">Password: </label>
                <input type="text" name="password"></input>

                <button>Enter</button>
            </fieldset>
        </form>
    
    )
}
