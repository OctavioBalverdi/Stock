
import TarjetaStock from "../Component/tarjetas/TarjetaStock";
import Matriz from "../Component/matrizStock/matrizS";
import "./Stockpag.css";

export const Stock=()=>{

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
