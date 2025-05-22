import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>OLYMPIC GAMES ARCHIVE</Text>

                <TouchableOpacity onPress={() => navigation.navigate('GreekCompetitions')} style={{marginBottom: 20}}>
                    <Image source={require('../assets/img/06805f8eb2dc99b568280ff4f181219891025739.png')} style={styles.image} />
                    <Text style={styles.label}>Ancient Greek Competitions</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('OlympicHistory')} style={{marginBottom: 20}}>
                    <Image source={require('../assets/img/fb8677de68a8500ef05beb3912946e7ae9a2d591.png')} style={styles.image} />
                    <Text style={styles.label}>The history of the Olympic Games</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        alignItems: 'center',
        paddingTop: 80
    },
    title: {
        color: '#FFA500',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: Dimensions.get('window').width / 1.2,
        height: 200,
        borderRadius: 50,
    },
    label: {
        backgroundColor: '#FFFACD',
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        // marginBottom: 20,
        width: Dimensions.get('window').width / 1.2,
    },
});
