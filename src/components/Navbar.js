import React from "react";

function Navbar(){
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">AmaBaba</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-Merch">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-Merch">
              <a className="nav-link" href="#">Best Sellers</a>
            </li>
            <li className="nav-Merch">
              <a className="nav-link" href="#">Customer Service</a>
            </li>
          </ul>
          <ul className="nav navbar-nav float-md-right">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;