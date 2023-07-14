import React from 'react';
import Navbar from './Navbar';


function Home() {
  return (
   
    <>
    <Navbar/>
   

    <div className="w-screen h-screen d-flex flex-column justify-center items-center px-10 py-8 mt-8">
      <div className="text-center">
        <img src="./Images/Yogyakarta.png" alt="Foto" className="w-40 h-40 mb-4 mx-auto" />
        <h1 className="display-4 font-weight-bold">Yogyakarta Camp Adventure</h1>
        <p className="lead mt-4">
        Camping di Yogyakarta menawarkan pengalaman tak terlupakan di tengah keindahan alam dan kekayaan budaya.
         Kota ini dikelilingi oleh gunung, pantai, dan gua yang memukau. Selama camping, kita bisa menikmati suasana
          alam yang tenang, langit berbintang, dan udara segar. Selain itu, Yogyakarta adalah pusat kebudayaan Jawa,
           dengan keraton, seni pertunjukan, dan tradisi yang unik. Camping menjadi kesempatan untuk merasakan budaya 
           setempat dan menikmati kuliner khas Jawa. Aktivitas luar ruangan seperti hiking, berenang, dan menjelajahi
            gua juga menambah keseruan camping di Yogyakarta.
        </p>
        <p className="lead mt-4">
        Jagalah Kebersihan !
        </p>
        <img src="./Images/Camping.jpg" alt="Foto" className="w40 h-40 mb-4 mx-auto" />
      </div>
    </div>
    
    </>
  );
}

export default Home;
