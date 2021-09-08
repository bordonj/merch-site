import React from "react";

function Navbar(){
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">AmaBaba</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarDark">
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Best Sellers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Customer Service</a>
            </li>
          </ul>
          <ul class="nav navbar-nav float-md-right">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;