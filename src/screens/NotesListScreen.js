import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, ImageBackground, ScrollView} from 'react-native';

const notes = [
    { id: '1', title: 'Strength in Stillness' },
    { id: '2', title: 'Fire in the Legs' },
    { id: '3', title: 'Warrior’s Breath' },
    { id: '4', title: 'No Victory Without Sweat' },
    { id: '5', title: 'Mind Over Muscle' },
];

export default function NotesListScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView style={styles.container}>
            <Text style={styles.header}>NOTES</Text>
                {notes.map((item) => (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('NoteDetailScreen', {
                                noteId: item.id,
                                title: item.title,
                            });
                        }}>
                        <Text style={styles.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
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
        // alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 20

    },
    header: { color: 'orange', fontSize: 24, fontWeight: 'bold', marginBottom: 20,  alignSelf: 'center', },
    button: {
        backgroundColor: '#00d4ff',
        borderRadius: 35,
        paddingVertical: 22,
        paddingHorizontal: 50,
        marginVertical: 8,
        // width: '100%',
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
