import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import Estilos from "../estilos";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [resultado, setResultado] = useState("");

    function inc(){
       setNumero(numero + passo);
    }

    function dec(){
        setNumero(numero - passo);
    }

    const parImpar = _=> numero % 2 == 0 ? setResultado("O número é Par") : setResultado("O número é Impar");

    return (
        <>
            <Text style={Estilos.textDois}>
                {resultado}
            </Text>
            <Text style={Estilos.textDois}>
                {numero}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Button 
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                />
                <Button
                    title="Par ou Ímpar"
                    onPress={parImpar}
                />
            </View>
            
        </>
        
    )

}