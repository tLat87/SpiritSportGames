import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export default function QuizResultScreen({ route, navigation }) {
    const { score, total } = route.params;

    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
        >
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Complete!</Text>
            <Text style={styles.scoreText}>Your Score:</Text>
            <Text style={[styles.title, {fontSize: 50}]}>{score} / {total}</Text>
            <Text style={[styles.scoreText, {color: '#1EFF3C', fontSize: 30}]}>{score < 3 ? 'Keeper of the Arena' : 'Olympian Scholar'}</Text>
            <Text style={styles.scoreText}>Your mastery rivals that of the poets and priests of old. Myths, rules, heroes — all are known to you. You are not just a student of Olympus… you are part of its legend.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.pop(3)}>
                <Text style={styles.buttonText}>Leave</Text>
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
        alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 20,
    },    title: { fontSize: 32, color: 'orange', marginBottom: 20 },
    scoreText: { fontSize: 24, color: 'white', marginBottom: 40 },
    button: {
        backgroundColor: '#d073f3',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: { color: 'white', fontSize: 18 },
});
