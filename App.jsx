import "react-native-gesture-handler";
import { Box, NativeBaseProvider, Input, Button } from "native-base";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Container } from "./components/Container";
import MyTextInput from "./components/MyTextInput";
import Title from "./components/Title";
import Menu from "./components/Menu";

export default function App() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  return (
    <NativeBaseProvider>
      <Menu />
        <StatusBar
          backgroundColor="blue"
          style="light"
          barStyle="dark-content"
        />
    </NativeBaseProvider>
  );
}