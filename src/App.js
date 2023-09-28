import * as React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {recordCollection} from './data/datasheet.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    fontFamily: 'veranda'
  },
  item: {
    padding: 16,
    fontSize: 18,
    margin: 8,
    fontFamily: 'veranda'

  },
});

function HomeScreen({navigation}) {
  return (
    <View style={{margin: 12,  alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 36, marginBottom:48}}>Vinyl Randomizer</Text>
      <Button
      title="View Full Record Collection"
      onPress={() => navigation.navigate('Collection')}
      />
    </View>
  );
}

function RecordCollection({navigation}) {
  return (
  <div>
    <View style={{margin: 12,  alignItems: 'center', justifyContent: 'center'}}>
          <Button
        title="Go to back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
        />
      <Text style={{padding: 12, fontWeight: 'bold'}}>Meg & Quinn's Record Collection</Text>
      <FlatList 
        data={recordCollection}
        renderItem={({item}) =>
          <Text>{item.artist} ---------------- {item.album}</Text>        
        }
      />
        </View>
  </div>
  )

}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
           <Stack.Screen
          name="Collection"
          component={RecordCollection}
          options={{ title: 'The Deets' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
