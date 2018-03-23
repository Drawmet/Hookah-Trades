import React, { Component } from 'react';

import Input from '../Common/Input';

class SignIn extends Component {

    handleOnChange = (value, type) => {
        console.log(value, type);
    }

    handleOnClick = (e) => {
        e.preventDefault();
        console.log('update');
    }

    render() {

        return (
            <div className='sign_in'>
                <form className='form'>
                    <Input
                        type='text'
                        placeholder='Username:'
                        onChange={(event) => this.handleOnChange(event.target.value, 'login')}
                    />
                    <Input
                        type='password'
                        placeholder='Password:'
                        onChange={(event) => this.handleOnChange(event.target.value, 'password')}
                    />
                    <div className="create_user">
                        <a href=''>Forgot Password?</a>
                    </div>
                    <button
                        className='submit'
                        onClick={this.handleOnClick}
                    >
                        Submit
                    </button>
                    <div className="create_user">
                        <a href=''>Create your account</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;