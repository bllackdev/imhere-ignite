import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    Alert.alert("Participante", "Participante foi adicionado!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 16 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
