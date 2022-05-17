import { createContext, useState } from "react";
export const Context = createContext(null);

const Provider = ({ children }) => {
  const [elementos, setElementos] = useState([
    {
      id: 1,
      name: "mis datos",
      items: [
        { id: 1, name: "elemento1" },
        { id: 2, name: "elemento2" },
      ],
    },
  ]);

  const addElement = () => {
    // Clonamos el elemento para poder incrementar su id y no tenga dependencia del primer objeto
    let element = JSON.parse(JSON.stringify(elementos[0]));

    // Incremenatmos el id con base en el ultimo elemento registrado
    element.id = elementos[elementos.length - 1].id + 1;

    // Actualizamos el state
    setElementos([...elementos, element]);
    return;
  };

  const addItem = (id) => {
    // Validamos que el elemento 2 exista
    if (elementos.length < id) return alert("No existe el elemento 2");

    // Obtenemos los elementos en un nuevo array
    const newItem = [...elementos];

    // Calculamos el nuevo id del item
    let item = newItem[id - 1].items;
    let idItem = item[item.length - 1].id + 1;

    // Identificamos el elemento con el id y hacemos un push
    newItem[id - 1].items.push({ id: idItem, name: `elemento${idItem}` });
    setElementos(newItem);
    return;
  };

  const saveElements = () => {
    fetch("http://endpoint/actualizar", {
      method: "POST",
      body: JSON.stringify(elementos),
    }).catch((err) => alert("Ha sucedido un error"));
  };

  return (
    <Context.Provider value={{ elementos, addElement, addItem, saveElements }}>
      {children}
    </Context.Provider>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Context,
};
