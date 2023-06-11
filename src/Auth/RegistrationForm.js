
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import "./RegistrationForm.css";
import { useState } from 'react';

function RegistrationForm(){

    const [form, setForm] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        confirmpassword:""

    })
    const [showPassword, setshowPassword] = useState(false);

    const [errors, setErrors] = useState({
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr:"",
        confirmpasswordErr:""
    })
        
    const changeUserData = (e) => {

        if(e.target.name == "email"){
            setForm({
                ...form,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailErr: e.target.value.length == 0 ?
                "Email is required" : !new RegExp(/\S+@\S+\.\S+/).test(e.target.value) && 
                "Incorrect email format"
            })

        } else if(e.target.name == "name"){
            setForm({
                ...form,
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameErr: e.target.value.length == 0 && "Name is required"
            })
        } else if(e.target.name == "username"){
            setForm({
                ...form,
                username: e.target.value
            })
            setErrors({
                ...errors,
                usernameErr: e.target.value.length == 0 ?
                "Username is required" : !new RegExp(/^[a-zA-Z]+$/).test(e.target.value) && 
                "Username contains no spaces "
            })
        } else if(e.target.name == "password"){
            setForm({
                ...form,
                password: e.target.value
            })

            setErrors({
                ...errors, 
                passwordErr: e.target.value.length == 0 ? "Password is required" :  
                !new RegExp(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).
                test(e.target.value) && 
                "Password must have Minimum 8 in length-At least one upperCase-At least one lowerCase- At least one digit -At least one special character."
            })
        } else{
            setForm({
                ...form,
                confirmpassword: e.target.value
            })

            setErrors({
                ...errors, 
                confirmpasswordErr: e.target.value.length===0? "Confirm password is required" :
                e.target.value!==form.password&& "Passwords do not match"
            })
        }
    }

    const submitData = (e) => {
        e.preventDefault()
        if(!errors.emailErr && !errors.passwordErr){
            console.log(e)
        }
    }

    return (

        <form className="form" onSubmit={(e) => submitData(e)}>
            
        <h1 className='mb-3' style={{fontWeight:'bold', marginLeft:"5rem"}}>Registration Form</h1>

        <div className="formGroup">
          <label className="formLabel">Name</label>
          <input
            className={`formField ${errors.nameErr && 'border-danger'}`}
            type="text"
            aria-label="Name field"
            name="name"
            value={form.name}
            onChange={(e) => changeUserData(e)}
          />
            <p className="text-danger"> {errors.nameErr} </p>
        </div>

        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            className={`formField ${errors.emailErr && 'border-danger'}`}
            type="text"
            aria-label="Email field"
            name="email"
            value={form.email}
            onChange={(e) => changeUserData(e)}
          />
            <p className="text-danger"> {errors.emailErr} </p>
        </div>

        <div className="formGroup">
          <label className="formLabel">User Name</label>
          <input
            className={`formField ${errors.usernameErr && 'border-danger'}`}
            type="text"
            aria-label="Username field"
            name="username"
            value={form.username}
            onChange={(e) => changeUserData(e)}
          />
            <p className="text-danger"> {errors.usernameErr} </p>
        </div>

        <div className="formGroup">
          <label className="formLabel">Password</label>
          <input
            className={`formField ${errors.passwordErr && 'border-danger'}`}
            type={showPassword ? "text" : "password"}
            aria-label="Password field"
            name="password"
            value={form.password}
            onChange={(e) => changeUserData(e)}
          />
           <img
          title={showPassword ? "Hide password" : "Show password"}
          src={showPassword ? hidePwdImg : showPwdImg}
          onClick={() => setshowPassword(prevState => !prevState)}
        />
           <p className="text-danger"> {errors.passwordErr} </p>
        </div>

        <div className="formGroup">
          <label className="formLabel">Confirm Password</label>
          <input
            className={`formField ${errors.confirmpasswordErr && 'border-danger'}`}
            type="password"
            aria-label="confirmpassword field"
            name="confirmpassword"
            value={form.confirmpassword}
            onChange={(e) => changeUserData(e)}
          />
           <p className="text-danger"> {errors.confirmpasswordErr} </p>
        </div>
       
        <div className="formActions">
          <button className="formSubmitBtn" type="submit"
          disabled={errors.emailErr || errors.passwordErr}
          >
            Login
          </button>
        </div>

      </form>
      );
}

export default RegistrationForm