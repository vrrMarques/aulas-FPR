import React from "react";

export default function Form({
  newVehicles,
  used,
  GetMakeCar,
  model,
  version,
  price,
  allVehicles,
  makeName,
  modelName,
  year,
  versionSelected,
  setStateVehicles,
  setModelId,
  setVersionId,
  setVersionSelected,
  setPrice,
  setYear,
  setUsed,
  setNewVehicles,
}) {
  const valormaior = parseInt(price) + 19999;

  function searchVehicle() {
    let filtredVehicle = allVehicles;
    if (newVehicles) {
      filtredVehicle = allVehicles.filter((filtred) => {
        return (
          (makeName ? filtred.Make == makeName : []) &&
          (modelName ? filtred.Model == modelName : []) &&
          (year ? filtred.YearModel == year : []) &&
          (versionSelected ? filtred.Version == versionSelected : []) &&
          (price ? filtred.Price >= price : []) &&
          (price ? parseInt(filtred.Price) <= valormaior : []) &&
          filtred.KM == 0
        );
      });
    } else if (used) {
      filtredVehicle = allVehicles.filter((filtred) => {
        return (
          (makeName ? filtred.Make == makeName : []) &&
          (modelName ? filtred.Model == modelName : []) &&
          (year ? filtred.YearModel == year : []) &&
          (versionSelected ? filtred.Version == versionSelected : []) &&
          (price ? filtred.Price >= price : []) &&
          (price ? parseInt(filtred.Price) <= valormaior : []) &&
          filtred.KM != 0
        );
      });
    } else if (!newVehicles || !used) {
      filtredVehicle = allVehicles.filter((filtred) => {
        return (
          (makeName ? filtred.Make == makeName : []) &&
          (modelName ? filtred.Model == modelName : []) &&
          (year ? filtred.YearModel == year : []) &&
          (versionSelected ? filtred.Version == versionSelected : []) &&
          (price ? filtred.Price >= price : []) &&
          (price ? parseInt(filtred.Price) <= valormaior : [])
        );
      });
    }

    setStateVehicles(filtredVehicle);
  }
  return (
    <form>
      <div className="checkboxes">
        <div
          className="checkboxes__box"
          onClick={() => {
            setNewVehicles(!newVehicles);
          }}
        >
          <input type="checkbox" checked={newVehicles ? true : false} />
          <label>Novos</label>
        </div>
        <div
          className="checkboxes__box"
          onClick={() => {
            setUsed(!used);
          }}
        >
          <input type="checkbox" checked={used ? true : false} />
          <label>Usados</label>
        </div>
      </div>
      <div className="inputs">
        <input className="locale" name="locale" placeholder="Onde:"></input>
        <select className="distance" name="distance">
          <option>Raio:</option>
          <option>100Km</option>
          <option>200Km</option>
          <option>300Km</option>
        </select>

        <select
          className="make"
          name="make"
          onChange={(e) => {
            setModelId(e.target.value);
          }}
        >
          <option>Marca: Todas</option>
          {GetMakeCar.map((make) => {
            return (
              <option value={make.ID} className={make.ID} key={make.ID}>
                {make.Name}
              </option>
            );
          })}
        </select>
        <select
          className="model"
          name="model"
          onChange={(e) => {
            setVersionId(e.target.value);
          }}
        >
          <option>Modelo: Todas</option>
          {model && (
            <>
              {model.map((mode) => {
                return (
                  <option value={mode.ID} key={mode.ID}>
                    {mode.Name}
                  </option>
                );
              })}
            </>
          )}
        </select>
        <select
          className="year"
          name="year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        >
          <option>Ano Desejado</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
        <select
          className="price"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        >
          <option>Faixa de Preço</option>
          <option value="0">De 0 á R$ 20.000</option>
          <option value="20000">De R$ 20.000 á R$ 39.999</option>
          <option value="40000">De R$ 40.000 á R$ 59.999</option>
          <option value="60000">De R$ 60.000 á R$ 79.999</option>
          <option value="80000">Mais de R$ 80.000</option>
        </select>
        <select
          className="version"
          name="version"
          onChange={(e) => {
            setVersionSelected(e.target.value);
          }}
        >
          <option>Versão: Todas</option>
          {version && (
            <>
              {version.map((versio) => {
                return (
                  <option value={versio.Name} key={versio.ID}>
                    {versio.Name}
                  </option>
                );
              })}
            </>
          )}
        </select>
      </div>
      <div className="buttons">
        <a className="search-avanced">> Busca Avançada</a>
        <div>
          <button
            className="clear"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Limpar Filtros
          </button>
          <button
            className="offers"
            onClick={(e) => {
              e.preventDefault();
              searchVehicle();
            }}
          >
            Ver Ofertas
          </button>
        </div>
      </div>
    </form>
  );
}
