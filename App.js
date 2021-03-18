import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './app/components/CalcButton';
import AndroidPadding from './app/components/AndroidPadding';
import AllButtons from './app/components/AllButtons';
import Calculator from './app/screens/Calculator';

export default function App() {
  return (
    <AndroidPadding>
      <Calculator/>
    </AndroidPadding>
  );
}

