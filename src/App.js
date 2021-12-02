import React, { useState } from "react";

function App() {
  const [selects, setSelects] = useState(["teste"]);

  const update = (i, e) => {
    const newSelects = [...selects];
    newSelects[i] = e.target.value;
    setSelects(newSelects);
  };
  const remove = (i) => {
    const newSelects = [...selects];
    newSelects.splice(i, 1);
    setSelects(newSelects);
  };
  const add = () => {
    const newSelects = [...selects];
    newSelects.push("teste");
    setSelects(newSelects);
  };

  return (
    <>
      {selects && selects.length > 0 ? (
        selects.map((s, i) => (
          <div key={i}>
            <select value={selects[i]} onChange={(e) => update(i, e)}>
              <option value="teste">teste</option>
              <option value="teste1">teste1</option>
              <option value="teste2">teste2</option>
            </select>
            <button onClick={() => add()}>Adicionar</button>
            <button onClick={() => remove(i)}>Remover</button>
          </div>
        ))
      ) : (
        <button onClick={() => add()}>teste</button>
      )}
      <button onClick={() => alert(selects)}>Enviar</button>
    </>
  );
}

export default App;
