import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OlympicHistory({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>THE HISTORY OF THE OLYMPIC GAMES</Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{ position: 'absolute', top: 50, left: 20, zIndex: 99 }}
                >
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900' }}>
                        {'< Back'}
                    </Text>
                </TouchableOpacity>

                <Card
                    image={require('../assets/img/8bae43af785e49e4245957fbd5adb19d1c46f74a.png')}
                    title="Pankration"
                    description="Pankration (from Greek, meaning 'all power') was one of the most intense and brutal competitions in the ancient Olympic Games. It combined wrestling and boxing, with very few rules — only biting and eye-gouging were forbidden. This no-holds-barred contest demanded not just strength, but also strategy, endurance, and courage."
                    facts={[
                        '– Historical records tell of deaths occurring during matches.',
                        '– Training was held in palaestras (wrestling schools) under the guidance of former champions.',
                        '– Victory brought great honor and sometimes even saved warriors in real battles.',
                        '– Considered the most dangerous and prestigious event.',
                    ]}
                />

                <Card
                    image={require('../assets/img/417d3124fe14a92f0534dd13209d8f9ad405eb16.png')}
                    title="Peace in the Name of the Gods"
                    description="Before each Olympic Games, a sacred truce called 'Ekecheiria' was declared to allow athletes and spectators to travel safely. This tradition emphasized unity and peace among Greek city-states during the games."
                    facts={[
                        '– The truce lasted for about a month.',
                        '– Violating the truce was seen as a sacrilege.',
                        '– Symbolized respect for the gods and the Olympic spirit.',
                    ]}
                />

                <Card
                    image={require('../assets/img/737a833d40966cf1e40697bd22ab9f301d9f6d27.png')}
                    title="Hera’s Sacred Festival"
                    description="Held in honor of the goddess Hera, this festival featured a women’s version of the Olympic Games. Young women competed in foot races at Olympia, highlighting their strength and devotion."
                    facts={[
                        '– Only unmarried women could participate.',
                        '– Winners received olive crowns and statues in their honor.',
                        '– Shows that women also had roles in sacred athletic traditions.',
                    ]}
                />
            </ScrollView>
        </ImageBackground>
    );
}

const Card = ({ image, title, description, facts }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('CompetitionDetailScreen', {
                    image,
                    title,
                    description,
                    facts,
                })
            }
            style={styles.card}
        >
            <Image source={image} style={styles.image} />
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 40,
    },
    title: {
        color: '#FFA500',
        fontSize: 24,
        textAlign: 'center',
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
