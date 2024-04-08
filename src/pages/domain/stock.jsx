
import TarjetaStock from "../Component/tarjetas/TarjetaStock";
import Matriz from "../Component/matrizStock/matrizS";
import "./Stockpag.css";

/*export const Stock=()=>{

  const matrizEjemplo = [
    // Estante 1
    [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ],
    // Estante 2
    [
      ['G', 'H', 'I'],
      ['J', 'K', 'L'],
    ],
    // ... más estantes
  ];

  return <Matriz estantes={matrizEjemplo} />;
  

  const matrizEjemplo = [
    // Estante 1
    [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ],
    // Estante 2
    [
      ['G', 'H', 'I'],
      ['J', 'K', 'L'],
    ],
    // ... más estantes
    
  ];

  return <Matriz estantes={matrizEjemplo} />;
  

   /* return(
          <>
        <div className="TarjetaStock">
            {<TarjetaStock/> }

        </div>
          
          </>
    )*/
}
*/
export const Stock = () => {
  // Define variables para configurar la cantidad de estantes, filas y columnas :*
  const numEstantes = 4;
  const numFilas = 4;
  const numColumnas = 5;

  // Crea una matriz dinámica basada en las variables :)
  const matrizEjemplo = [];
  for (let i = 0; i < numEstantes; i++) {
    matrizEjemplo.push([]);
    for (let j = 0; j < numFilas; j++) {
      matrizEjemplo[i].push([]);
      for (let k = 0; k < numColumnas; k++) {
        matrizEjemplo[i][j].push(`${String.fromCharCode(65 + i)}${j + 1}${String.fromCharCode(65 + k)}`);
      }
    }
  }

  return <Matriz estantes={matrizEjemplo} />;
};
