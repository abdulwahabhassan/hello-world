import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [pressedCount, setPressedCount] = useState(0);

  const handlePress = () => {
    setPressedCount(pressedCount => ++pressedCount)
  }

  const handleResetPress = () =>  {
    setPressedCount(0)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 50, textAlign: 'center'}}>
   <ScrollView >
   <View style={{flex: 1}}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me <Text style={{fontWeight: 'bold'}}>Vertically</Text>!
    </Text>
      <View>
      <ScrollView>
        <View style={{ width: 500, height: 500, backgroundColor: 'red' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'green' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'blue' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'yellow' }} />
      </ScrollView>
      </View>
    </View>

      <View style={{flex: 1, marginTop: 30}}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me <Text style={{fontWeight: 'bold'}}>horizontally</Text>!
    </Text>
      <View>
      <ScrollView horizontal>
      <View style={{ width: 500, height: 500, backgroundColor: 'yellow' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'red' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'green' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'blue' }} />
      </ScrollView>
      </View>
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 24, marginTop: 40}}>Button Press</Text>
        <View style={{backgroundColor: 'black', borderRadius: 16, width: '50%', marginTop: 40, marginBottom: 50}}>
          <Button color='white' title='Press Me Please' onPress={handlePress} disabled={pressedCount == 6}/>
          </View>
          <Text style={{fontSize: 20, marginBottom: 10, color: 'dodgerblue'}}>
            You have pressed me: {pressedCount} {pressedCount > 1 ? 'times' : 'time'}..
            </Text>
            <Text style={{fontSize: 16, marginBottom: 40, color: 'red'}}>
              {pressedCount == 6? 'Sorry, I can\'t go any further!': null}
            </Text>
            <View style={{backgroundColor: 'black', width:'30%', marginBottom: 50}}>
          <Button title='Reset Me' onPress={handleResetPress} color='chartreuse'/>
          </View>
      </View>
   </ScrollView>
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
