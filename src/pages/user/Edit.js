import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://tiny-gray-newt-tie.cyclic.app/pengunjung/${_id}`).then((res) => {
      setName(res.data.nama);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, [_id]);

  const data = {
    nama: name,
    email: email,
    phone: phone,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:9090/pengunjung/${_id}`, data).then(() => {
      navigate("/tablemember"); // Mengarahkan pengguna ke halaman "tablemember"
    });
  }

  return (
    <>
    <Navbar />
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Detail Pengunjung</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <button
          className="bg-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          Perbarui Data
        </button>
      </form>
    </div>
    </>
  );
}

export default Edit;
