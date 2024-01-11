import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-white px-6 py-2 shadow">
      <div class="flex justify-between">
        <div class="text-2xl text-green-600 font-semibold">VERDES</div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-green-600">
            HOME
          </a>
          <a href="#" class="hover:text-green-600">
            ABOUT
          </a>
          <a href="#" class="hover:text-green-600">
            BLOG
          </a>
          <a href="#" class="hover:text-green-600">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
