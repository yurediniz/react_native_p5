import React from "react";
import { Text } from "react-native";
import Estilos from "../estilos";



function Comp (){
    return <Text  style={Estilos.text}>Comp #01</Text>
}

function Comp2 (){
    return <Text  style={Estilos.text}>Comp #02</Text>
}

function Comp3 (){
    return <Text  style={Estilos.text}>Comp #03</Text>
}

export {Comp2, Comp3}
export default Comp