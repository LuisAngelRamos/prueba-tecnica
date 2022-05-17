import { useContext } from "react";
import Context from "../Context";

export const Elements2 = () => {
  const { addElement, addItem, saveElements } = useContext(Context.Context);

  return (
    <>
      <h1>Componente 2</h1>
      <button onClick={() => addElement()}>Añadir elemento</button>
      <button onClick={() => addItem(2)}>Añadir item</button>
      <button onClick={() => saveElements()}>Guardar Cambios</button>
    </>
  );
};
