import React, { useEffect, useState } from 'react'
import style from './signUp.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RegisterAction } from '../../Redux/actions'

function SignUp(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])

    const [myUsers, setMyusers] = useState([])

    const regEmail1 = /^([\.\a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regEmail2 = /^([\.\a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}$\.[a-zA-Z]{1,3}$/;


    const [emailErr, setEmailErr] = useState("")


    const loginAction = (e) => {
        e.preventDefault();
        if (password.length >= 8) {

            myUsers.push(email)
            const parsed = JSON.stringify(myUsers)
            localStorage.setItem('email', parsed)
            // console.log(parsed)
        } else {
            alert('Password should be atlest 8 characters')
        }
    }

    useEffect(() => {
        if (regEmail1.test(email) || regEmail2.test(email)) {
            setEmailErr("Email id is valid")
        } else {
            setEmailErr("Email id is invalid")
        }
    }, [email])


    const [user, setUser] = useState({
        title: "",
        first: "",
        last: "",
        gender: "",
        email: "",
        username: "",
        password: "",
        dob: "",
        phone: null,
    });


    const regUser = (e) => {
        const target = e.target
        // console.log(target)
        const name = target.name;

        setUser({
           ...user,[name]:target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        props.RegisterAction();
        
    }

    console.log(props)


    return (
        <div className={style.rightSection}>
            <h2>Welcome back!</h2>
            {/* <p>{user.first}</p> */}
            <p className={style.greeting}>Please Sign Up</p>
            <form className={style.formSection} onSubmit={submitHandler}>
                <div className={style.formInput}>
                    <label
                        htmlFor="name"
                        className={style.formLabel}>Name</label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,title:e.target.value})}
                    ></input>

                    <input
                        id=""
                        type="text"
                        name="first"
                        placeholder="First name"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,first:e.target.value})}
                    ></input>

                    <input
                        type="text"
                        name="last"
                        placeholder="Last Name"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,last:e.target.value})}
                    ></input>

                </div>

                {/*  */}

                <div className={style.formRadio}>

                    <p>Please select your Gender</p>
                    <div className={style.content}>
                        <input type="radio" name="gender" value="Male" onChange={(e)=>setUser({...user,gender:e.target.value})} />
                        <label htmlFor="html">Male</label>
                    </div>
                    <div className={style.content}>
                        <input type="radio" name="gender" value="Female" onChange={(e)=>setUser({...user,gender:e.target.value})} />
                        <label htmlFor="css">Female</label>
                    </div>
                </div>

                <div className={style.formInput}>
                    <label
                        htmlFor="email"
                        className={style.formLabel}></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,email:e.target.value})}
                    ></input>
                </div>

                <div className={style.formInput}>
                    <label
                        htmlFor="password"
                        className={style.formLabel}></label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,username:e.target.value})}
                    ></input>
                </div>

                <div className={style.formInput}>
                    <label
                        htmlFor="dob"
                        className={style.formLabel}></label>
                    <input
                        type="text"
                        name="dob"
                        placeholder="Date of birth"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,dob:e.target.value})}
                    ></input>
                </div>

                <div className={style.formInput}>
                    <label
                        htmlFor="phone"
                        className={style.formLabel}></label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,phone:e.target.value})}
                    ></input>
                </div>



                <div className={style.formInput}>
                    <label
                        htmlFor="password"
                        className={style.formLabel}></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={style.formInput}
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                    ></input>
                </div>

                <div className={style.mid}>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="remember" value="Bike"></input>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/">Forgot password</a>
                        <div>
                            <Link to='/login'>Back to login</Link>
                        </div>
                    </div>
                </div>

                <div className={style.loginBtn}>
                    <button>Sign Up</button>
                </div>
                <div className={style.footer}>
                    <a href="https://www.youtube.com/">Terms of use,</a>
                    <a href="https://www.youtube.com/">Privacy policy</a>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        RegisterAction: (e) => {dispatch(RegisterAction(e));},
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


