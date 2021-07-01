import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

const Item = ({style, item, id, onPress, color}) =>  {
//   Touchable opacity A wrapper for making views respond properly to touches.
//  * On press down, the opacity of the wrapped view is decreased, dimming it.

  return (
  <TouchableOpacity onPress={onPress}>
    <View style={style}>
    <Text style={[styles.flatListText, {fontWeight: 'bold'}, {color: color}, {textAlign: 'center'}]}>
      {item.name} {id}
    </Text>
    </View>
  </TouchableOpacity>)

};
  

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

  const [selectedItem, setSelectedItem] = useState(null)

  const flatListArray = [
    {
      id: 1,
      name: 'Abdulwahab Hassan'
    },
    {
      id: 2,
      name: 'Monica Lewandosky'
    },
    {
      id: 3,
      name: 'Billy Chantel'
    },
    {
      id: 4,
      name: 'Alpha Melorite'
    },
    {
      id: 5,
      name: 'Meghan Stallion'
    },
    {
      id: 6,
      name: 'Bimbo Brandy'
    },
    {
      id: 7,
      name: 'Papi Chulo'
    }
    
  ]
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', marginTop: 50, textAlign: 'center'}}>
   <ScrollView >

     {/* Verical scroll */}
   <View style={{flex: 1}}>
    <Text style={[styles.sectionHeader, {marginTop: 5}]}>
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
      <View style={{flex: 1, marginTop: 10}}>
      <Text style={styles.sectionHeader}>
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
        <Text style={styles.sectionHeader}>Button Press</Text>
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
      <Text style={styles.sectionHeader}>
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

      {/* FlatList */}
      {/* Virtualized lists should never be nested inside plain scrollviews with the same orientation?? */}
      {/* The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It
      reflects the physical limitation of the screen, such as rounded corners or camera notches */}

      <SafeAreaView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Text style={styles.sectionHeader}>Basic Flat List</Text>
        <FlatList 
          data = {flatListArray}
          renderItem = {({item}) => (<View style={{backgroundColor: 'beige', marginTop: 20, borderRadius: 5, width: '100%', padding: 8}}> 
            <Text style={[styles.flatListText, {fontWeight: 'bold'}]}> {item.id}  {item.name} </Text> 
            </View>)}
            keyExtractor={(item) => item.id}
          style={[styles.flatList, {width: '100%'}]}
        />
        {/* keyExtractor tells the list to use the ids for the react keys instead of the default key property. 
        This is helpful for react to keep track of each element in the list*/}

       <Text style={[styles.sectionHeader, {marginTop: 100}]}>Complex Selectable Flat List</Text>
       <FlatList 
       data = {flatListArray}
       style={[styles.flatList, {width: '100%'}]}
       renderItem ={({item}) => (<Item id= {item.id == selectedItem ? item.id : ''} color={item.id == selectedItem ? 'black' : 'white'} style={ [item.id == selectedItem ? {backgroundColor: 'pink'} : {backgroundColor: 'black'}, 
        { marginTop: 20, padding: 8, borderRadius: 5}]} item={item} onPress={() => setSelectedItem(item.id)} />)}
       keyExtractor = {(item) => item.id}
       extraData = {selectedItem}
       />
       {/* By passing extraData={selectedItem} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, 
       FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes. */}
      </View>
      </SafeAreaView>
     
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
  sectionHeader: {
    fontSize: 24, 
    marginTop: 40,
    alignSelf:'center'
  },
  flatList: {
    marginTop: 10
  },
  flatListText: {
    fontSize: 18,
  }
});
