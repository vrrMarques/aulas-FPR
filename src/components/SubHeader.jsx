import React from "react";

export default function SubHeader() {
  return (
    <div className="sub-header">
      <div className="options">
        <a className="options__link selected">
          <img className="icon" src="/images/carro.svg" alt="cars" />
          <p className="options__text">
            <small>Comprar</small> Carros
          </p>
        </a>
        <a className="options__link">
          <img className="icon" src="/images/motocicleta.svg" alt="motocycle" />
          <p className="options__text">
            <small>Comprar</small> Motos
          </p>
        </a>
      </div>
      <a className="sale-car">Vender meu carro</a>
    </div>
  );
}
