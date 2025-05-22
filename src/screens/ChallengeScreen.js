import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default function ChallengeScreen({route, navigation}) {
    const {img, title, id} = route.params;
    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>CHALLENGES</Text>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 70, left: 20, zIndex: 99}}>
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
                </TouchableOpacity>

                <Image
                    source={img}
                    style={styles.challengeImage}
                />

                <Text style={styles.challengeTitle}>{title}</Text>

                <View style={styles.descriptionBox}>
                    <Text style={styles.description}>
                        <Text style={styles.bold}>Description:{"\n"}</Text>
                        Unleash your inner warrior through seven days of high-intensity strength training
                        inspired by the ancient combat sport of pankration. Each day focuses on power,
                        endurance, and resilience — no machines, no excuses, only your body and will. Push
                        through with discipline, and earn the respect of Olympus.
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('GoalScreen', {id})}}>
                    <Text style={styles.buttonText}>Start Challenge</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        marginTop: 30,
        fontSize: 24,
        color: 'orange',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    challengeImage: {
        width: 300,
        height: 200,
        borderRadius: 20,
        marginTop: 20,
    },
    challengeTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'orange',
        marginTop: 15,
    },
    descriptionBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 15,
        marginVertical: 20,
    },
    description: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
