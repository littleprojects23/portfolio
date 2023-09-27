export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          A Little Projects
        </a>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
      >
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="portfolio/helmiar527">
                  helmiar527
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="portfolio/d.ken/">
                  d.ken
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="portfolio/qiqi/">
                  qiqi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="portfolio/indi/">
                  indi
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home Team
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="helmiar527/">
                  helmiar527
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="d.ken/">
                  d.ken
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="qiqi/">
                  qiqi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="indi/">
                  indi
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer bg-black small text-center text-white-50">
      <div className="container px-4 px-lg-5">
        Copyright &copy; A Little Projects 2023
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Welcome</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Learning programing and create a little projects
            </h2>
            {/* <a className="btn btn-primary" href="#about">
              Get Started
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
