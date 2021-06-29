import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {


  const [pressedCount, setPressedCount] = useState(0);
  const handlePress = () => {
    setPressedCount(pressedCount => ++pressedCount)
  };

  const [name, setName] = useState('');
  const handleTextChange = (text) => {
    setName(text)
  };

  const handleResetPress = () =>  {
    setPressedCount(0)
  };

  const [profile, setProfile] = useState({});
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    setProfile(
      {'name': name,
      'password': password}
      );
  };

  const isProfileComplete = () => {
    return (profile.hasOwnProperty('name') && 
    profile.name !== '' && profile.hasOwnProperty('password') && 
    profile.password !== '') ? true : false

  };
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 50, textAlign: 'center'}}>
   <ScrollView >

     {/* Verical scroll */}
   <View style={{flex: 1}}>
    <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 5}}>
      Scroll me <Text style={{fontWeight: 'bold'}}>Vertically</Text>!
    </Text>
      <View style={{marginTop: 10}}>
      <ScrollView>
        <View style={{ width: 500, height: 500, backgroundColor: 'red' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'yellow' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'green' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'blue' }} />
      </ScrollView>
      </View>
    </View>

      {/* Horzontal scroll */}
      <View style={{flex: 1, marginTop: 30}}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me <Text style={{fontWeight: 'bold'}}>horizontally</Text>!
    </Text>
      <View style={{marginTop: 10}}>
      <ScrollView horizontal>
      <View style={{ width: 500, height: 500, backgroundColor: 'yellow' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'red' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'green' }} />
        <View style={{ width: 500, height: 500, backgroundColor: 'blue' }} />
      </ScrollView>
      </View>
      </View>

      {/* Button Press */}
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

      {/* TextInput */}
      <View style={{flex: 1, alignItems: 'flex-start', padding: 20}}>
      <Text style={{fontSize: 24, marginTop: 40, alignSelf:'center'}}>
        Text Input
        </Text>
        <Text style={{fontSize: 18, marginTop: 20, marginBottom: 15, color: 'dimgrey'}}>
          {name ? `Hi ${name}, WELCOME!` : 'Please enter your name:'}
        </Text>
        <TextInput onChangeText={handleTextChange} style={{width:'100%', padding: 12, backgroundColor: 'gainsboro', marginBottom: 20}}/>
        <Text style={{fontSize: 18, marginTop: 20, marginBottom: 15, color: 'dimgrey'}}>
          Password:
        </Text>
        <TextInput value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} style={{width:'100%', padding: 12, backgroundColor: 'gainsboro', marginBottom: 20}}/>
        <Text  style={{color: 'red'}}>{ isProfileComplete() ? <Text style={{color: 'green'}}>Profile {JSON.stringify(profile)}</Text> : 'Please input name and password'}</Text>
        <View alignSelf='center' style={{backgroundColor: 'black', borderRadius: 5, width: '30%', marginTop: 40, marginBottom: 50}}>
          <Button color='white' title='Submit' onPress={handleSubmit}/>
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
