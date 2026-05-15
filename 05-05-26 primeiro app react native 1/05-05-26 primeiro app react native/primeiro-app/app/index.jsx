import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Foto from "../assets/images/imagem.jpg";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      <Text style={estilos.titulo}>My First App XD</Text>

      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o App</Text>
        <Text style={estilos.texto}>
          Este aplicativo foi desenvolvido como parte do nosso processo de aprendizagem em desenvolvimento mobile. 
Estamos explorando conceitos básicos e evoluindo a cada etapa do projeto.
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderemos</Text>
        <Text style={estilos.texto}>• Layout Responsivo</Text>
        <Text style={estilos.texto}>• Push Notifications</Text>
        <Text style={estilos.texto}>• Acesso a APIs</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Do que precisamos</Text>
        <Text style={estilos.texto}>• Node.js</Text>
        <Text style={estilos.texto}>• VS Code</Text>
        <Text style={estilos.texto}>• Foco, força e fé 💪</Text>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#121212",
  },

  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  imagem: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },

  subtitulo: {
    color: "#00bfff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  texto: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
});