import React, { useEffect, useState } from 'react'
import style from './login.module.css'
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])

    const [myUsers, setMyusers] = useState([])

    const regEmail1 = /^([\.\a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regEmail2 = /^([\.\a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}$\.[a-zA-Z]{1,3}$/;
    

    const [emailErr, setEmailErr] = useState("")
    

    const loginAction = (e) => {
        e.preventDefault();
        // if (users.includes(email)) {
        //     return alert('User already exist')
        // } else {
        //     // setUsers(email);
        //     users.push(email);
        //     localStorage.setItem('users', JSON.stringify(users));
        //     alert("Signed In");
        // }
        
        if (password.length >= 8) {

            myUsers.push(email)
            const parsed = JSON.stringify(myUsers)
            localStorage.setItem('email', parsed)
            console.log(parsed)
        } else {
            alert('Password should be atlest 8 characters')
        }
    }

    useEffect(()=>{
        if (regEmail1.test(email) || regEmail2.test(email)) {
            setEmailErr("Email id is valid")
        }else{
            setEmailErr("Email id is invalid")
        }
    },[email])

    



    return (
        <div className={style.rightSection}>
            <h2>Welcome back!</h2>
            <p className={style.greeting}>Please login to your account.</p>
            <form className={style.formSection}>
                <div className={style.formInput}>
                    <label
                        htmlFor="username"
                        className={style.formLabel}></label>
                    <input
                        id="username"
                        type="email"
                        name="username"
                        placeholder="Username"
                        className={style.formInput}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    ></input>
                    <p className={style.errorMsg}>{email?emailErr:null}</p>
                </div>

                <div className={style.formInput}>
                    <label
                        htmlFor="password"
                        className={style.formLabel}></label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={style.formInput}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    ></input>
                </div>

                <div className={style.mid}>
                    <div className={style.checkbox}>
                        <input type="checkbox" id="" name="remember" value="Bike"></input>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <a href="#">Forgot password</a>
                        <div>
                            <Link to='/reg'>Register here</Link>
                        </div>
                    </div>
                </div>

                <div className={style.loginBtn}>
                    <button onClick={loginAction}>Login</button>
                </div>

                <div className={style.footer}>
                    <a href="#">Terms of use,</a>
                    <a href="#">Privacy policy</a>

                </div>
            </form>
        </div>
    )
}

export default Login
