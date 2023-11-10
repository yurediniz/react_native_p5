import {React} from "react";
import { Text } from "react-native";
import Estilos from "../estilos";


export default (a) => {
    const teste = a.numero < 10 ? "Numero Baixo" : "Numero Alto"
    return (
        <Text style={Estilos.text}>
            {teste}
        </Text>
        );
}