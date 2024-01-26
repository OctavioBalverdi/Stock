import { useState } from "react";
import { DatePicker } from "keep-react";

export const FechayHora = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker singleDate={setDate} placeholder="Dia / Mes / Año">
      <DatePicker.SingleDate />
    </DatePicker>
  );
}