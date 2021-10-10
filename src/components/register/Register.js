import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form">
            <div className="">
                <h2>Register</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Your Name" /><br />
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" placeholder="Your Password" /><br />
                    <input type="submit" name="" value="submit" id="" placeholder="" /><br />
                </form>
                <p>Already Register ? <Link to="/login">Login</Link></p>
                <div className="">_______________or________________</div><br />
                <button className="btn-regular">Googl Sign in </button>
            </div>
        </div>
    );
};

export default Register;