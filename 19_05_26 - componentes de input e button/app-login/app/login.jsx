import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../assets/images/logo.jpg';

export default function Index() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login(){
    console.log('Dados do Login');
    console.log({ email, senha });
  }

  return (
    <LinearGradient
      colors={['#ff9ecf','#ff6fb5','#ff4da6']}
      start={{x:0,y:0}}
      end={{x:0,y:1}}
      style={{flex:1}}
    >
      <ScrollView contentContainerStyle={estilos.container}>
        
        <Image
          source={Logo}
          style={estilos.logo}
          resizeMode='contain'
        />

        <Text style={estilos.titulo}>Login</Text>
        <Text style={estilos.sub}>Insira suas credenciais</Text>

        <View style={estilos.form}>
          <Text style={estilos.label}>Email</Text>
          <TextInput
            style={estilos.input}
            placeholder='Digite seu e-mail'
            placeholderTextColor="#cc6699"
            keyboardType='email-address'
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />

          <Text style={estilos.label}>Senha</Text>
          <TextInput
            style={estilos.input}
            placeholder='*****'
            placeholderTextColor="#cc6699"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={estilos.botao} onPress={Login}>
            <Text style={estilos.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'center',
    padding:20
  },

  logo:{
    width:'100%',
    height:180,
    marginBottom:10
  },

  titulo:{
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff',
    marginBottom:5
  },

  sub:{
    fontSize:16,
    textAlign:'center',
    color:'#ffe6f2',
    marginBottom:30
  },

  form:{
    backgroundColor:'#fff0f6',
    padding:20,
    borderRadius:25,
    shadowColor:'#d63384',
    shadowOpacity:0.25,
    shadowRadius:10,
    elevation:8
  },

  label:{
    fontSize:16,
    color:'#b03060',
    marginBottom:5,
    marginTop:10,
    fontWeight:'600'
  },

  input:{
    backgroundColor:'#ffffff',
    borderRadius:15,
    padding:14,
    borderWidth:2,
    borderColor:'#ffb3d1',
    marginBottom:10
  },

  botao:{
    backgroundColor:'#ff4da6',
    padding:16,
    borderRadius:18,
    marginTop:20,
    alignItems:'center'
  },

  textoBotao:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  }
});