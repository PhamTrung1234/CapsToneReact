import { Link } from "react-router-dom";
import "../main.css";

export default function Login() {
  return (
    <section className="sign-in">
  <div className="container">
    <div className="signin-content  d-flex align-items-center justify-content-between">
      
      <div className="signin-form">
        <h2 className="form-title">Log in</h2>
        <form method="POST" className="register-form" id="login-form">
          <div className="form-group">
            <label >
            <i className="fa-solid fa-user material-icons-name zmdi"></i>
            </label>
            <input type="text"  placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <label ><i className="zmdi zmdi-lock fa-solid fa-lock" /></label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group d-flex align-items-center">
            <input type="checkbox"   className="agree-term" />
            <span>Remember me</span>
          </div>
          
          <button className="btn btn-primary">Log in</button>
        </form>
        <div className="social-login">
          <span className="social-label">Or login with</span>
          <ul className="socials">
          
            <li><Link aria-disabled={true} to="#"><i className="display-flex-center zmdi zmdi-facebook fa-brands fa-facebook-f" /></Link></li>
            <li><Link to="#" aria-disabled={true}><i className="display-flex-center zmdi zmdi-twitter fa-brands fa-twitter" /></Link></li>
            <li><Link to="#" aria-disabled={true}><i className="display-flex-center zmdi zmdi-google fa-brands fa-google" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="signin-image">
        <figure><img src="img/signin-image.jpg" alt="sing up image" /></figure>
        <Link to="/singin" className="signup-image-link d-flex align-items-center justify-content-between clear-text">
            <span>Create an account</span>
            <button className="btn btn-primary ">Sign up</button>
        </Link>
      </div>
    </div>
  </div>
</section>


  )
}
