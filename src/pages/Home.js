import React from 'react';


function Home() {
  return (
    <div className="w-screen h-screen d-flex flex-column justify-center items-center px-10 py-8 mt-8">
      <div className="text-center">
        <img src="./Images/Yogyakarta.png" alt="Foto" className="w-40 h-40 mb-4 mx-auto" />
        <h1 className="display-4 font-weight-bold">Yogyakarta Camp Adventure</h1>
        <p className="lead mt-4">
          Ini adalah halaman home, Anda bisa memilih fitur kami berupa testimoni, table pengunjung, tambah pengunjung pada dropdown "Buka menu".
        </p>
        <p className="lead mt-4">
           Untuk mengaktifkan database nya terlebih dahulu "json-server --watch db.json --port 3001".
        </p>
        <img src="./Images/Camping.jpg" alt="Foto" className="w40 h-40 mb-4 mx-auto" />
      </div>
    </div>
  );
}

export default Home;
