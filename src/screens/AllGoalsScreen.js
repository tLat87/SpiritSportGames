import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions} from 'react-native';
import ChallengeScreen from './ChallengeScreen';


export default function AllGoalsScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>OLYMPIC GAMES ARCHIVE</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ChallengeScreen', {img: require('../assets/img/a7157febbb62e559c89d2768297adc771f0049ae.png'), title:'7 days of Pankration', id: 'pankration'})} style={{marginBottom: 20}}>
                    <Image source={require('../assets/img/a7157febbb62e559c89d2768297adc771f0049ae.png')} style={styles.image} />
                    <Text style={styles.label}>7 days of Pankration</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ChallengeScreen', {img: require('../assets/img/237928a224a7575a34c03c44c95035cd23feff36.png'), title:'Hercules Run', id: 'hercules'})} style={{marginBottom: 20}}>
                    <Image source={require('../assets/img/237928a224a7575a34c03c44c95035cd23feff36.png')} style={styles.image} />
                    <Text style={styles.label}>Hercules Run</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ChallengeScreen', {img: require('../assets/img/13e378cfd8566223eb7f8eb8712beb82b73a26f2.png'), title:'Day of Silence of Zeus', id: 'zeus'})} style={{marginBottom: 20}}>
                    <Image source={require('../assets/img/13e378cfd8566223eb7f8eb8712beb82b73a26f2.png')} style={styles.image} />
                    <Text style={styles.label}>Day of Silence of Zeus</Text>
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
