import React from "react";
import Cards from "./Cards";
import Card from "./Cards"

export default props =>{
    const {min, max} = props
    const aleatorio = parseInt(Math.random () * (max - min)) + min
    return(
        <Cards title="Sorteio dos números" purple >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Cards>
    )
}