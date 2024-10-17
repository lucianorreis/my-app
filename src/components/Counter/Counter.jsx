import React, { useState } from "react";

export function Counter() {
  const [Contador, setContador] = useState(0);
    return (
      <div style={{marginTop: "20px",marginLeft: "20px" }}>
        <h1>{Contador}</h1>
        <div>
            <button
              onClick={() => {
                //! this.state.contador -= 1
                setContador(Contador - 1)
            }}
            >
                Diminuir
            </button>
            <button
              onClick={() => {
                setContador(Contador + 1)
                }}
            >
                Aumentar
            </button>
        </div>
      </div>
    );
  }
