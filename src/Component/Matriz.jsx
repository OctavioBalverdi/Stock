import React, {useState} from 'react';
import TarjetaStock from './TarjetaStock';


const MatrizComponente = ({ filasIniciales, columnasIniciales, profundidadesIniciales }) => {
  const [matriz, setMatriz] = useState(() => {
    // Inicializar la matriz con las dimensiones proporcionadas
    const nuevaMatriz = Array.from({ length: filasIniciales }, () =>
      Array.from({ length: columnasIniciales }, () => Array.from({ length: profundidadesIniciales }, () => ({ contenido: null })))
    );
    return nuevaMatriz;
  });

  const [paginaProfundidad, setPaginaProfundidad] = useState(0);

  const agregarFila = () => {
    // Agregar una nueva fila a la matriz
    setMatriz([...matriz, Array.from({ length: columnasIniciales }, () => Array.from({ length: profundidadesIniciales }, () => ({ contenido: null })))]);
  };

  const agregarColumna = (indiceFila) => {
    // Agregar una nueva columna a la fila específica
    const nuevaMatriz = matriz.map((fila, index) => {
      if (index === indiceFila) {
        return [...fila, Array.from({ length: profundidadesIniciales }, () => ({ contenido: null }))];
      }
      return fila;
    });

    setMatriz(nuevaMatriz);
  };

  const agregarProfundidad = (indiceFila, indiceColumna) => {
    // Agregar una nueva profundidad a la celda específica
    const nuevaMatriz = matriz.map((fila, indexFila) => {
      if (indexFila === indiceFila) {
        return fila.map((columna, indexColumna) => {
          if (indexColumna === indiceColumna) {
            return [...columna, { contenido: null }];
          }
          return columna;
        });
      }
      return fila;
    });

    setMatriz(nuevaMatriz);
  };

  const actualizarContenido = (indiceFila, indiceColumna, indiceProfundidad, nuevoContenido) => {
    // Actualizar el contenido de la celda específica
    const nuevaMatriz = matriz.map((fila, indexFila) => {
      if (indexFila === indiceFila) {
        return fila.map((columna, indexColumna) => {
          if (indexColumna === indiceColumna) {
            return columna.map((profundidad, indexProfundidad) => {
              if (indexProfundidad === indiceProfundidad) {
                return { contenido: nuevoContenido };
              }
              return profundidad;
            });
          }
          return columna;
        });
      }
      return fila;
    });

    setMatriz(nuevaMatriz);
  };

  const cambiarPaginaProfundidad = (delta) => {
    setPaginaProfundidad((prevPagina) => Math.max(0, Math.min(profundidadesIniciales - 1, prevPagina + delta)));
  };

  return (
    <div>
      <button onClick={agregarFila}>Agregar Fila</button>

      <table>
        <tbody>
          {matriz.map((fila, indexFila) => (
            <tr key={indexFila}>
              {fila.map((columna, indexColumna) => (
                <td key={indexColumna}>
                  <button onClick={() => agregarColumna(indexFila)}>
                    Agregar Columna
                  </button>

                  <div>
                    {Array.isArray(columna) &&
                      columna.map((profundidad, indexProfundidad) => (
                        <TarjetaStock
                          key={indexProfundidad}
                          contenido={profundidad.contenido}
                          onActualizarContenido={(nuevoContenido) =>
                            actualizarContenido(indexFila, indexColumna, indexProfundidad, nuevoContenido)
                          }
                        />
                      ))}
                  </div>

                  <button onClick={() => agregarProfundidad(indexFila, indexColumna)}>
                    Agregar Profundidad
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => cambiarPaginaProfundidad(-1)}>Anterior Profundidad</button>
        <span>Página: {paginaProfundidad + 1}</span>
        <button onClick={() => cambiarPaginaProfundidad(1)}>Siguiente Profundidad</button>
      </div>
    </div>
  );
};

export default MatrizComponente;