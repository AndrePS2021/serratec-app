import React from 'react';
import { Text, StatusBar } from 'react-native';
import Title from './components/Title';
import { Container } from './components/Container';


export default function App() {
  return (
    <Container>
      <Title>Serratec App</Title>
      <Text style={{color: 'red'}}>
        Olá, Mundo!
      </Text>
      <StatusBar 
        backgroundColor="blue"
        style="light"
        barStyle="dark-content"
         />
    </Container>
  );
}
