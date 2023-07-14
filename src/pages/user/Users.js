import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9090/pengunjung/${id}`).then((res) => {
      console.log(res.data)
      setUser(res.data);
    });
  }, [id]);

  console.log(user);
  return (
    <>
    <Navbar />
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to="/tablemember" // Update the route path to the desired page
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-white text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          kembali
        </Link>
        
        {user && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Nama
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Email
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                No Hp
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {user.nama}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {user.email}
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                {user.phone}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
