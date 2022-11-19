import React from "react";
import Cards from "./Cards";
import Card from "./Cards"

export default props =>{
    const {min, max} = props
    return(
        <Cards title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong> {min + max}</strong>
                </span>
            </div>
        </Cards>
    )
}