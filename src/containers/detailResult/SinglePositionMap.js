import React ,{useState}from 'react';
import { Text, View,StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE ,Marker,Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ReturnButton} from '../../components'
export const SinglePositionMap = (props) => 
{
  const { navigation } = props
  const [styleM,changeStyleM]=useState(false)

  return(
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        latitude: 20.982843,
        longitude: 105.792014,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
       }}
       customMapStyle={styleM?mapStyle:[]}

     >

           <Marker coordinate={{ latitude:20.982843, longitude: 105.792014 }} >
             {/* <CustomMarker/> */}
             <Callout style={{width: 60}}>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </Callout>
           </Marker>


     </MapView>
     <ReturnButton onPress={()=>navigation.goBack()}/>
     
   </View>
);}


const CustomMarker = () => (
  <View
    style={{
  
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 25,
      elevation: 10,
   
    }}
  >
    <Text style={{ color: "#fff" }}>Berlin</Text>
  </View>
);

 

const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]
  
  



const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
   flex:1,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
   flex:1
 },
})
