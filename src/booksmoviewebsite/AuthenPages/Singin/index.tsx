import { Link } from "react-router-dom"
import "../main.css"

export default function Singin() {
  return (
    <section className="signup">
  <div className="container">
    <div className="signup-content">
      <div className="signup-form">
        <h2 className="form-title">Sign up</h2>
        <form method="POST" className="register-form" id="register-form">
          <div className="form-group">
            <label ><i className="zmdi zmdi-account material-icons-name fa-solid fa-user" /></label>
            <input type="text" name="name"  placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email"><i className="zmdi zmdi-email fa-solid fa-envelope" /></label>
            <input type="email" name="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="pass"><i className="zmdi zmdi-lock fa-solid fa-lock" /></label>
            <input type="password" name="pass" id="pass" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline fa-solid fa-lock" /></label>
            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
          </div>
          <div className="form-group d-flex align-items-center">
            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
            <span>I agree all statements in
            <a href="#" className="term-service">Terms of service</a>
            </span>
           
          </div>
          <button className="btn btn-primary">Sign up</button>
        </form>
      </div>
      <div className="signup-image">
        <figure><img src="img/signup-image.jpg" alt="sing up image" /></figure>
        <Link to="/login" className="signup-image-link clear-text d-flex align-items-center justify-content-between">
            <span>I am already member</span>
            <button className="btn btn-primary">Sign in</button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}
