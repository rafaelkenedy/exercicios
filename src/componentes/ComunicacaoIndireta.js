import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar}
        />
    </View>

export class TextoSincronizado extends Component{

    state ={
        text: ''
    }

    alteraTexto = texto => {
        this.setState({ texto })
    }

    render(){
        return(
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alteraTexto} />
            </View>
        )
    }

}