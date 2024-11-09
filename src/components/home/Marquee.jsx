import React from 'react';
import './../../index.css';

const clients = [
  "/Ashok Leyland.png",
  "/Brakes India.png",
  "/Gabriel.png",
  "/Lumnx.png",
  "/Mahindra.png",
  "/Maruti Suzuki.png",
  "/MEI.jpeg",
  "/Meritor.png",
  "/NRB BEARINGS.png",
  "/Rane.png",
  "/SKF.png",
  "/Spicer.png",
  "/TATA.png",
  "/Timken.png",
  "/UNO MINDA.png",
  "/Valeo.png",
];

const ClientsMarqueeSection = () => {
  return (
    <section className="py-10 bg-gray-100" id='clients'>
      <h2 className="text-center text-3xl font-bold mb-8 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">Our Clients</h2>
      <h5 className='text-center font-oswald m-4 font-semibold'>TempoHouse Over the Past 50 Years, has Garnered an Enviable list of Clientele</h5>
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-marquee space-x-6">
          {clients.map((logo, idx) => (
            <div
              key={idx}
              className="p-4 flex-shrink-0 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="w-28 md:w-32 lg:w-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarqueeSection;
