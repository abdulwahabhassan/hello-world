import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 50, textAlign: 'center'}}>
    <View style={{flex: 1}}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me <Text style={{fontWeight: 'bold'}}>Vertically</Text>!
    </Text>
      <View>
      <ScrollView>
        <View style={{ width: 400, height: 400, backgroundColor: 'red' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'green' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'blue' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'yellow' }} />
      </ScrollView>
      </View>
    </View>

      <View style={{flex: 1, marginTop: 30}}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me <Text style={{fontWeight: 'bold'}}>horizontally</Text>!
    </Text>
      <View>
      <ScrollView horizontal>
      <View style={{ width: 400, height: 400, backgroundColor: 'yellow' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'red' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'green' }} />
        <View style={{ width: 400, height: 400, backgroundColor: 'blue' }} />
      </ScrollView>
      </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
