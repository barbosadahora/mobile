import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const valor = parseFloat(alcool) / parseFloat(gasolina);

    if (valor < 0.7) {
      setResultado("Compensa usar Álcool");
    } else {
      setResultado("Compensa usar Gasolina");
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Preço do Álcool</Text>
      <TextInput
      placeholder='Ex. 7.00'
        keyboardType="numeric"
        onChangeText={setAlcool}
      />

      <Text>Preço da Gasolina</Text>
      <TextInput
      placeholder='Ex. 10.00'
        keyboardType="numeric"
        onChangeText={setGasolina}
      />

      <Button title="Calcular" onPress={calcular} />

      <Text>{resultado}</Text>
    </View>
  );
}