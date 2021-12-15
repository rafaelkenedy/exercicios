import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Simples texto='Flexível'/>
        <ParImpar numero={22}/>
        <Inverter texto='Rafael'/>
        <MegaSena numeros={6}/>
        <Contador numeroInicial={100}/>
        <Plataformas />
        <ValidarProps ano={18}/> 
        <Evento />
        <Avo nome='Joao' sobrenome='silva'/>
        <TextoSincronizado />*/}
        <ListaFlex/>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  f20: {
    fontSize: 40
  }
})