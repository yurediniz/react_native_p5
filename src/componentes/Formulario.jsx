import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
export default props => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const carregaDados = _=> {
        console.warn(email, senha);
    }

    return (
        <View>
            <TextInput
                style={{borderWidth: 1.0}}
                keyboardType='email-address'
                placeholder='Digite seu email'
                value={email}
                onChangeText={email => setEmail(email)}
            />
             <TextInput
                style={{borderWidth: 1.0}}
                secureTextEntry
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={senha => setSenha(senha)}
            />
            <Button
                title="Login"
                onPress={carregaDados}
                color={"#008000"}
            />
        </View>
    )
}