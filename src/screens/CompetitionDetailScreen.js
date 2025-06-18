import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, ScrollView, Dimensions, TouchableOpacity} from 'react-native';

export default function CompetitionDetailScreen({ route, navigation }) {
    const { image, title, description, facts } = route.params;

    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 50, left: 20, zIndex: 99}}>
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>ANCIENT GREEK COMPETITIONS</Text>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>{title}</Text>

                <Text style={styles.subTitle}>Description:</Text>
                <Text style={styles.text}>{description}</Text>

                <Text style={styles.subTitle}>Quick Facts:</Text>
                {facts?.map((fact, index) => (
                    <Text key={index} style={styles.text}>• {fact}</Text>
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
        padding: 20,
        paddingTop: 80,
    },
    sectionTitle: {
        color: '#FFA500',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
    },
    image: {
        width: Dimensions.get('window').width - 40,
        height: 180,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 10,
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 5,
    },
    text: {
        color: '#ffffff',
        marginBottom: 5,
        fontSize: 14,
        lineHeight: 20,
    },
});
