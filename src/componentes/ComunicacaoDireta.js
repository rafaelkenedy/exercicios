import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30}}

function filhosComProps(props){
    return React.Children.map(props.children, 
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Rafael' sobrenome={props.sobrenome}>            
            <Filho nome='Daniel'/>
            <Filho nome='Rafaela'/>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca' />
        </Pai>
    </View>
export default Avo