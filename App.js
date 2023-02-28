import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'red',width: 300,
  height: 300,
  fontWeight: 'Times New Roman',
  borderRadius: 100,
  
  /*Adicione o raio da borda esquerda (left) e direita (right) da parte superior e inferior*/
 /*Adicione a fonte Times New Roman*/  
    /*Adicione shadowColor (cor da sombra)*/
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:10,
    }}>feliz aniversario voce é muito legal</Text>
  
    );
  }
}


