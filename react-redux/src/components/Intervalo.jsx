import "./Intervalo.css"
import React from "react"

import Cards from "./Cards"

export default props =>{
    const {min, max} = props
    return(
        <Cards title ="Intervalo de Números " red>
        <div className="Intervalo">
            <span>
            Minimo:
            <input type="number" value={min} onChange = {e => props.onMinChanged(+e.target.value)} />
            </span>

            <span>
            Maximo:
            <input type="number" value={max} onChange = {e => props.onMaxChanged(+e.target.value)}/>
            </span>


        </div>
        </Cards>
    )
}