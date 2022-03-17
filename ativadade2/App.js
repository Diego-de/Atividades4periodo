import React, {useState } from 'react';
import { ImageBackground,Image, StyleSheet,TextInput, View, Button } from 'react-native';


export default function App() {

  
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('')

  const guardar = (e) =>{
    setValor(e.target.value)
  }

  const Mostrar = () =>{
    setResultado(valor)
  }


  return (
    
    <View style={styles.container}>
      <ImageBackground source={require("./img/comida.jpg")} resizeMode="cover" style={styles.image}>
        <View style={styles.fundo}>
        <h1>{resultado}</h1> 
          <View>
              <Image source={require('./img/comida2.png')}  resizeMode="" style={styles.image2}/>
          </View>       
          <TextInput style={styles.input} placeholder="Ex: coxinha" onChange={(guardar)}/>
          <Button title="Confirmar" onPress={Mostrar} ></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image:{
    flex:1,
    alignItems: 'center',
    justifyContent:"center",
    width: '100%', height: '100%'
  },
  image2:{
    flex:1,
    justifyContent:"center",
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 500,
    margin: 20  
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    color: 'blue',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fundo:{
    backgroundColor:'#836FFF',
    height: '50%',
    width: '15%',
    padding: '30',
    alignItems: 'center',
    opacity:'90%'
  },

});
