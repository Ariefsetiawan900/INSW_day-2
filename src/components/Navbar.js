import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="bi bi-list"></i>
        </label>

        <a href="" class="logo">
          Cafe.com
        </a>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
          <li>
            <a href="#feedback">feedback</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
