import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default function QuizStartScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
        >
        <View style={styles.container}>
            <Text style={styles.title}>QUIZ</Text>
            <Text style={styles.subtitle}>How well do you know old times?</Text>
            <Image
                source={require('../assets/img/b163630883bf3bc659416a44b4d5d938be49f334.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('QuizGameScreen')}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        paddingTop: 80,
        alignItems: 'center',
        paddingHorizontal: 20,
    },    title: { fontSize: 36, color: 'orange', fontWeight: 'bold' },
    subtitle: { fontSize: 28, color: 'white',fontWeight: '900', textAlign: 'center', marginVertical: 20 },
    image: { width: '100%', height: 250, borderRadius: 20, marginBottom: 40 },
    button: {
        backgroundColor: '#d073f3',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
    },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
