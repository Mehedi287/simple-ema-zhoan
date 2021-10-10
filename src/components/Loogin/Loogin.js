import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/usefirebase';
import "./Login.css"
const Loogin = () => {
    const { singnInWithGoogl, user } = useFirebase()
    return (
        <div className="form">
            <div className="">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" placeholder="Your Password" /><br />
                    <input type="submit" name="" id="" value="submit" placeholder="" /><br />
                </form>
                <p>Already Login ? <Link to="/register">Register</Link></p>
                <div className="">_______________________or_________________</div><br />
                <button onClick={singnInWithGoogl} className="btn-regular">Google Sing in</button>
            </div>

        </div>
    );
};

export default Loogin;