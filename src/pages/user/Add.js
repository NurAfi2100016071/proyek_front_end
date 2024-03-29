import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();
  const data = {
    nama: name,
    email: email,
    phone: phone,
  };

  function submitForm(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Email tidak valid!");
      return;
    }
    setEmailError("");

    if (!validatePhone(phone)) {
      setPhoneError("Nomor HP hanya boleh berisi angka!");
      return;
    }
    setPhoneError("");

    axios
      .post("https://tiny-gray-newt-tie.cyclic.app/pengunjung", data)
      .then(() => navigate("/tablemember")) // Mengarahkan ke halaman "tablemember" setelah selesai
      .catch((error) => console.error(error));
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePhone(phone) {
    const regex = /^\d+$/;
    return regex.test(phone);
  }

  return (
    <>
    <Navbar />
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Tambah Pengunjung</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Masukkan Nama"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Masukkan Email"
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="tel"
          placeholder="Masukkan No Hp"
        />
        {phoneError && <p className="text-red-500">{phoneError}</p>}
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Selesai
        </button>
      </form>
    </div>
    </>
  );
}

export default Add;
