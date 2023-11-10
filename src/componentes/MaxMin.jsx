import React from "react";
import { Text } from "react-native";
import Estilos from "../estilos";

export default props => {
    let menor;
    let maior;
    let igual = false;

    if(props.min > props.max){
        maior = props.min;
        menor = props.max;
    }else if(props.min == props.max){
        igual = true;
    }else {
        maior = props.max;
        menor = props.min;
    }


    return (
        igual ? <Text style={Estilos.text}>Valor {props.min} e {props.max} são iguais</Text> 
              : <Text style={Estilos.text}>Valor {maior} e maior que valor {menor} </Text>
    )
}