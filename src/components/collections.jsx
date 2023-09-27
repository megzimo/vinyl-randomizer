import * as React from "react";
import {Text, View} from 'react-native';
import { recordCollection } from '../data/datasheet'

const artists = recordCollection.forEach(element => {
   console.log(element.artist)
});

export default function CollectionComponent () {
    let list = artists;
 return (
     <View>
         <Text>
             Collections Page
         </Text>
     </View>
 ) 
}