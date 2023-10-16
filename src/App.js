import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {recordCollection} from './data/datasheet.js'

let recordsInQueue = recordCollection;
let selectedAlbum = {};
 

////////------------- HOME SCREEN/MAIN NAVIGATION -------------////////
function HomeScreen({navigation}) {
  return (
    <View style={{margin: 12,  alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 36, marginBottom:48}}>Vinyl Randomizer</Text>
      <Button
      title="View Full Record Collection"
      onPress={() => navigation.navigate('Collection')}
      />
      <Button
      title="Record Randomizer"
      onPress={() => navigation.navigate('Randomizer')}
      />
    </View>
  );
}


 ////////------------- MAIN FUNCTIONALITY OF RANDOMIZER -------------////////
 function RandomizerScreen({navigation}) {
  // STATE SETTING
  const [generateItem, albumSelected] = useState(false);
  const [myText, setMyText] = useState();
  let albumTextDisplay = selectedAlbum.album;
  
    function generateAlbum() {
      let albumIndex = Math.random() * recordsInQueue.length;
      let randomizedAlbum = recordsInQueue.slice(albumIndex, albumIndex + 1)[0];
      selectedAlbum = randomizedAlbum;
      albumTextDisplay = selectedAlbum.album;
    }
    
    // TODO
    function selectOrRejectAlbum(recordListItem) {
      if(selectedAlbum === recordListItem.album) {
        let index = recordsInQueue.find((item) => item.album === selectedAlbum)
        console.log('index ', index)
      }
    }
    

              //---------------- RETURNED HTML ELEMENTS ----------------//
    return (
      <View 
      style={{margin: 12,  alignItems: 'center', justifyContent: 'center', padding: 24}}
      >
          {/* INITIAL RANDOMIZING BUTTON */}
        <Button
        onPress={() => {
          generateAlbum();
          albumSelected(true);
          setMyText(albumTextDisplay)
        }}
        disabled={generateItem}
        title='What album are you spinning next?'
        />
        <Text>
          Time to toss on {myText} by {selectedAlbum.artist}
        </Text>

        {/* SPIN AGAIN BUTTON */}
      <Button
      onPress={() => {
        generateAlbum();
        setMyText(albumTextDisplay)
      }}
      disabled={!generateItem}
      title='spin again'
      />


      {/* RETURN HOME BUTTON */}
      <Button
      title="Return Home"
      onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}
//------------- END RANDOMIZER -------------//


//---------------- RECORD COLLECTION SCREEN ----------------//
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


//-------------------- FUNCTIONALITY OF NAVIGATION --------------------//
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
          name="Randomizer"
          component={RandomizerScreen}
          options={{title: 'Randomizer'}}
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
