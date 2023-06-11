// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import "./LoginForm.css";
import { useState } from 'react';

function LoginForm(){

    const [form, setForm] = useState({
        email:"",
        password:"",

    })
    const [showPassword, setshowPassword] = useState(false);

    const [errors, setErrors] = useState({
        emailErr:"",
        passwordErr:""
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

        }else{
            setForm({
                ...form,
                password: e.target.value
            })

            setErrors({
                ...errors, 
                passwordErr: e.target.value.length == 0 ? "Password is required" :  
                e.target.value.length < 8 && 
                "Password must have a minimum 8 characters"
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
            
        <h1 className='mb-3' style={{fontWeight:'bold', marginLeft:"7rem"}}>Login Form</h1>

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

export default LoginForm