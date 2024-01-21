import React from 'react';
import "./TarjetaProducto.css";
import Logo from "../assets/Logo.svg"

const TarjetaProducto = () => {
  return (
    <section id="card1" className="cards">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-image-fill"
        fill="currentColor"
        height="40"
        width="40"
        xmlns={Logo}
      >
        <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
      </svg>
      <div className="cards__content">
        <p className="cards__title">Lorem Ipsum</p>
        <p className="cards__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo vel lorem tincidunt ultrices at non nunc. Donec in sapien
          viverra, tincidunt augue id, efficitur massa.
        </p>
      </div>
    </section>
  );
};

export default TarjetaProducto;