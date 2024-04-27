import {NavLink} from "react-router-dom"

export default function Header() {
    const fixedHeader =     window.addEventListener('scroll', function() {
        let navbar = document.querySelector('header');
        if (window.scrollY > 0) { 
            navbar?.classList.add('fixed-top');
        } else {
            navbar?.classList.remove('fixed-top');
        }
    });
  return (
   
      
  
  <header>
    <div className="container header__content pl-0 pr-0">
      <nav className="navbar navbar-expand-lg align-items-center">
        <NavLink className="navbar-brand logo" to="/">
          <span className="mt-2">tieusau</span>
          <span>
            <i className="fa-solid fa-film ml-2" />
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            
          <span className="fa-solid fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto header__item">
            <li className="nav-item ">
              <NavLink className={({isActive})=>(isActive ? "nav-link my_active":"nav-link")} to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? "nav-link my_active":"nav-link")} to="/phim">
                Phim 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? "nav-link my_active":"nav-link")} to="/rap">
                Rạp Chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>(isActive ? "nav-link my_active":"nav-link")} to="/thanhvien">
                Thành Viên
              </NavLink>
            </li>
          </ul>
          <div className="header__item1 mr-sm-2">
            <form>
              <input type="search" name="s" />
              <a href="#">
                <img src="./img/favorite.png" alt="..." />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
    
  </header>


    
  )
}
