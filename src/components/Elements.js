import Context from "../Context";
import { useContext } from "react";

export const Elements = () => {
  const { elementos, addElement, addItem, saveElements } = useContext(
    Context.Context
  );
  console.log(elementos);
  return (
    <>
      <h1>Componente 1</h1>
      <button onClick={() => addElement()}>Añadir elemento</button>
      <button onClick={() => addItem(2)}>Añadir item</button>
      <button onClick={() => saveElements()}>Guardar Cambios</button>
    </>
  );
};
