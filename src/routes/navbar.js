import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-white px-6 py-2 shadow">
      <div class="flex justify-between">
        <div class="mainText text-2xl font-semibold">VERDES</div>
        <div class="flex space-x-4">
          <a href="#" class="hover:">
            HOME
          </a>
          <a href="#" class="navText">
            ABOUT
          </a>
          <a href="#" class="navText">
            BLOG
          </a>
          <a href="#" class="navText">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
