import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { authContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn} = useContext(authContext);
  const [disabled,setDisabled] = useState(true);
  const from = location.state?.from?.pathname || "/"; 
   const { signInWithGoogle } = useContext(authContext);

   // sign in with google
    const loginWithGoogle = () => {
      signInWithGoogle()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
          .then(res=>res.json())
          .then(()=>{
            navigate(from, { replace: true });
           
          })
        })
    };

  useEffect(()=>{
        loadCaptchaEnginge(6); 
  },[])

  const handleLogin = (even) => {
    even.preventDefault();
    const form = even.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      Swal.fire("Good job!", "Login Successful!", "success");
      navigate(from, { replace: true });
    })
  };
  const handleValidateCaptcha = (e) =>{
     const user_captcha_value = e.target.value;
       console.log(user_captcha_value)
     if (validateCaptcha(user_captcha_value)) {
        setDisabled(false)
       }else{
        setDisabled(true)
       }
    
       
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type The Captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                {/* TODO:make button disabled for captcha */}
                <button
                  className="btn btn-primary"
                  disabled={false}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              <small>
                New Here? <Link to="/register">Create An Account</Link>
              </small>
            </p>{" "}
            <div className="divider"></div>
            <div className="text-center mb-5">
              <button
                onClick={loginWithGoogle}
                className="btn btn-circle btn-outline"
              >
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
