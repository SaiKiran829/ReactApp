import PropTypes from 'prop-types'



export default function Navbar(props) {

  return (
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary "data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about" >{props.about}</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = { title: PropTypes.string, home: PropTypes.string}