import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Navbar
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Faculty
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">
                  Student
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#">
                  Subject
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
