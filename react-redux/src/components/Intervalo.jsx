import "./Intervalo.css"
import React from "react"

import Cards from "./Cards"

export default props =>{
    return{
        <Cardtitle ="Intervalo de Números " red>
        <div>
            <span>
            Minimo:
            <input type="number" value={0} />
            </span>

            <span>
            Maximo:
            <input type="number" value={10} />
            </span>


        </div>
        </Card>
    }
}