import React from "react";
import { View, Text } from "react-native";
import Estilos from "../estilos";

export default ({min, max}) => {


    const delta = max - min * 1;
    const aleatorio = parseInt(Math.random() * delta) + min;

    let menor;
    let maior;
    let igual = false;

    /*if(){

    }else if(){
        igual = true;
    }else {

    }*/



    return (
            <Text style={Estilos.text}>
                O valor aleatório e {aleatorio}
            </Text>
           
        
        
    )
}