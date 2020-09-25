import React from "react";

export default function ListVehicles({ stateVehicles }) {
  return (
    <div className="boxes">
      {stateVehicles.map((vehicle) => {
        return (
          <div className="box">
            <div className="cute-img">
              <img src={vehicle.Image} />
            </div>
            <div className="box__texts">
              <p className="box__title">
                {vehicle.Make} {vehicle.Model}
              </p>
              <p className="box_version">{vehicle.Version}</p>
              <p className="box_price"> R$ {vehicle.Price}</p>
              <div className="box_info">
                <p>
                  {vehicle.YearModel}/ {vehicle.YearFab}
                </p>
                <p>{vehicle.KM} km</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
