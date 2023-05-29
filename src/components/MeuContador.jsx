import { useState } from "react";
import styles from "../button.module.css"

useState

export default function MeuContador(){

    const [contador, setContador] = useState(0)
    
    console.log("renderizando meu contador...")
    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador - 1)
    }
    return(
        <div className="container">
            <h1>Meu Contador: {contador}</h1>
            {contador > 9 ? <h1>Valor muito grande, pressione Diminuir</h1> : null}
            {contador >= 0 && contador <= 9 ? <h1>Bom Numero!</h1> : null}
            {contador < 0 ? <h1>Valor muito pequeno, pressione Aumentar</h1> : null}
            <div className="buttons">
                <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
            </div>

        </div>
    )

}