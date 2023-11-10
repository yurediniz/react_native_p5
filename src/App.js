import React from "react";
import { View, StyleSheet } from "react-native";
import Primeiro from './componentes/Primeiro'
import PrimeiroProps from "./componentes/PrimeiroProps";
import Multi, {Comp2, Comp3} from "./componentes/Multi";
import Aleatorio from "./componentes/Aleatorio";
import MaxMin from "./componentes/MaxMin";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";

export default () =>  {
    
        return (
            <View style={style.App}>
               {/* <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <Multi/>
                <Comp2/>
                <Comp3/>
                <Primeiro/>
                <PrimeiroProps numero={10}/>
                <MaxMin min={100} max={75}/>
                <MaxMin min={100} max={100}/>
                <Botao/>
                */}

                <Contador inicial={100} passo={10}/>
                <Contador/>
            </View>
        )
    
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
