import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function GreekCompetitions({navigation}) {
    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 50, left: 20, zIndex: 99}}>
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>ANCIENT GREEK COMPETITIONS</Text>

                <Card  image={require('../assets/img/4145c6a8c800155d9064b2caf7d52a9cf7f7a9c7.png')} title="Pankration" />
                <Card image={require('../assets/img/e8f9689b90d1e576a2d8f040be23e3a2f7eb64b5.png')} title="Running in Armor" />
                <Card image={require('../assets/img/d692ab33df074ee6a6858cd42e6daa340f90a93d.png')} title="Discus Throwing" />
            </ScrollView>
        </ImageBackground>
    );
}

const Card = ({ image, title, description, facts }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('CompetitionDetailScreen', { image, title, description, facts })
            }
            style={styles.card}
        >
            <Image source={image} style={styles.image} />
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        alignItems: 'center',
        paddingTop: 80,
    },
    title: {
        color: '#FFA500',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        marginBottom: 30,
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
        width: Dimensions.get('window').width / 1.2,
    },
});
