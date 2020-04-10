import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MainBlockStyles from '@/styles';

class GeoLocationComponent extends Component {

    state = {
        coords: null,
        status: 'undetermined',
        direction: ''
    }
    componentDidMount () {
        this.askPermission();
      }

    askPermission = () => {
        Permissions.askAsync(Permissions.LOCATION)
        .then(({ status }) => {
          if (status === 'granted') {
            return this.setLocation()
          }
  
          this.setState(() => ({ status }))
        })
        .catch((error) => console.warn('error asking Location permission: ', error))
    }
  setLocation = () => {
        Location.watchPositionAsync({
            enableHighAccuracy: true,
            timeInterval: 1,
            distanceInterval: 1,
            }, ({ coords }) => {

            this.setState(() => ({
                coords,
                status: 'granted',
            }))
        })
    }
    render() {
        const {status} = this.state;

        if (status === 'undetermined') {
            return (
                <SafeAreaView>
                    <View style={MainBlockStyles.containerFullHeight}>
                        <Foundation name='alert' size={50} />
                        <Text style={MainBlockStyles.centerText}>
                            You need to enable location services for this app.
                        </Text>
                        <TouchableOpacity onPress={this.askPermission}>
                            <Text>
                                Enable
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            );
        }

        if (status === 'denied') {
            return (
                <SafeAreaView>
                    <View style={MainBlockStyles.containerFullHeight}>
                        <Foundation name='alert' size={50} />
                        <Text style={MainBlockStyles.centerText}>
                            You denied your location. You can fix this by visiting your settings and enabling location services for this app.
                        </Text>
                    </View>
                </SafeAreaView>
            );
        }

        return (
            <SafeAreaView>                    
                <View style={MainBlockStyles.containerFullHeight}>
                    <Text style={MainBlockStyles.title}>Current coordinates: </Text>
                    <View style={MainBlockStyles.flexRowSpaceBetween}>
                        <Text>Accuracy: </Text>
                        <Text>{this.state.coords.accuracy}</Text>
                    </View>    
                    <View style={MainBlockStyles.flexRowSpaceBetween}>
                        <Text>Altitude: </Text>
                        <Text>{this.state.coords.altitude}</Text>
                    </View>    
                    <View style={MainBlockStyles.flexRowSpaceBetween}>
                        <Text>Heading: </Text>
                        <Text>{this.state.coords.heading}</Text>
                    </View>    
                    <View style={MainBlockStyles.flexRowSpaceBetween}>
                        <Text>Latitude: </Text>
                        <Text>{this.state.coords.latitude}</Text>
                    </View>    
                    <View style={MainBlockStyles.flexRowSpaceBetween}>
                        <Text>Longitude: </Text>
                        <Text>{this.state.coords.longitude}</Text>
                    </View>    
                </View>
            </SafeAreaView>
        );

    }
}

export default GeoLocationComponent;