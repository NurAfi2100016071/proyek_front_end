import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";


function Tablemember() {
    const [users, setUsers] = useState([]);
  function loadUsers() {
    axios.get("https://tiny-gray-newt-tie.cyclic.app/pengunjung").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

// mengirim permintaan delete ke http  database
  function deleteUser(_id) {
    axios.delete(`https://tiny-gray-newt-tie.cyclic.app/pengunjung/${_id}`).then(loadUsers());
  }

  return (
  
    <>
    <Navbar />
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">PENGUNJUNG CAMP ADVENTURE</h1>
        <p className="text-lg mt-4">
          CAMP ADVENTURE berdiri sejak 2023
        </p>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-orange-400">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        No Hp
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Pilihan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.nama}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.phone}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${data._id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            Lihat
                          </Link>
                          <Link
                            to={`/edit-user/${data._id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Ubah
                          </Link>
                          <Link
                            onClick={()=>deleteUser(data._id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Hapus
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-lg mt-4">
          @yogyakartacampadventure@gmail.com
        </p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Tablemember;
