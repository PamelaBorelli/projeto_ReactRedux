import React from "react";
import Cards from "./Cards";
import Card from "./Cards"

export default props =>{
    const {min, max} = props
    return(
        <Cards title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Cards>
    )
}