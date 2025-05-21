import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provoder/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocalLoginGoogle from '../../Components/SocalLoginGoogle';

const Login = () => {

  const { logIn } = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true)

  const location = useLocation()
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        Swal.fire({
          title: "Login in successful",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message)
      })

  }
  const handleCaptchaBtn = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">

          <p className="py-6">
            Provident cupiditate voluptatem et in.
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>

              <LoadCanvasTemplate />
              <input type="captcha" onBlur={handleCaptchaBtn} name="captcha" className="input" placeholder="match the avobe categoris" />
              {/* TODO:disable part if work ex[disabled={disabled}] */}
              <button type='submit' disabled={false} className="btn btn-neutral mt-4">Login</button>
            </form>
            <p><small>here<Link to='/signup'>create an account</Link></small></p>
            <div className="divider m-0"></div>
          </div>
          <div className="-mt-8 p-3">
            <SocalLoginGoogle className="ml-4"></SocalLoginGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;