import React from 'react';

const Login = props => {

    return (
        <div className="loginForm">
            <form onSubmit={props.login}>
                <input
                    placeholder ="User"
                    onChange={props.change}
                />
                <input
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}


export default Login