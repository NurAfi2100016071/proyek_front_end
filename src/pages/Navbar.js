import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between bg-orange-500">
        <Link to={"/home"} className="text-3xl text-white font-semibold font-Montesarrat">CAMP ADVENTURE</Link>

        <div className="relative">
          <button
            className="hover:bg-blue-600 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-blue-600 font-bold text-black py-2 px-2 mr-4"
            onClick={toggleDropdown}
          >
            {isOpen ? "Tutup Menu" : "Buka Menu"}
          </button>
          {isOpen && (
            <div className="absolute right-0 top-10 bg-white border border-gray-300 rounded-lg shadow-md py-2 px-4">
              <Link to={"/home"} className="block py-2 hover:bg-gray-200">Home</Link>
              <Link to={"/testimonials"} className="block py-2 hover:bg-gray-200">Testimoni</Link>
              <Link to={"/add-user"} className="block py-2 hover:bg-gray-200">Tambah Pengunjung</Link>
              <Link to={"/tablemember"} className="block py-2 hover:bg-gray-200">Daftar Pengunjung</Link>
              <Link to={"/login"} className="block py-2 hover:bg-gray-200">Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar;
