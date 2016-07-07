import React from 'react';

import './LoginForm.css';

export default () => <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign in to get your personal AI</h1>
            <div className="account-wall">
                <form className="form-signin">
                <input type="text" className="form-control" placeholder="Email" required autofocus />
                <input type="password" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>
                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>
            <a href="#" className="text-center new-account">Create an account </a>
        </div>
    </div>
</div>;
