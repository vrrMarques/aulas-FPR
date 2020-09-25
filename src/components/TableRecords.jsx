import React from "react";

export default function TableRecords({
  registros,
  filtrar,
  apagarRegistros,
  setFiltrando,
}) {
  return (
    <>
      {apagarRegistros && <div>Os registros foram apagados</div>}
      {registros?.length >= 1 && !apagarRegistros && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TITULO</th>
              <th>DETALHES</th>
            </tr>
          </thead>

          {filtrar?.length == 0 && (
            <tbody>
              {registros.map((registro) => {
                return (
                  <tr key={registro.id}>
                    <td>{registro.id}</td>
                    <td>{registro.title}</td>
                    <td>
                      {" "}
                      <a className="botao-vizualizar" href={`${registro.id}`}>
                        Visualizar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {filtrar?.length > 0 && (
            <tbody>
              {setFiltrando(false)}
              {filtrar.map((registro) => {
                return (
                  <tr key={registro.id}>
                    <td>{registro.id}</td>
                    <td>{registro.title}</td>
                    <td>
                      {" "}
                      <a className="botao-vizualizar" href={`${registro.id}`}>
                        Visualizar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      )}
    </>
  );
}
