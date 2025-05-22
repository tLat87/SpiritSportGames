    import React from 'react';
    import {
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        ScrollView,
        Linking,
        Image,
        ImageBackground,
        Switch,
    } from 'react-native';
    import { useSelector, useDispatch } from 'react-redux';
    import {toggleZeus} from '../redux/slices/zeusWord';

    export default function DevInfoScreen({ navigation }) {
        return (
            <ImageBackground
                source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
                style={styles.background}
            >
                <ScrollView style={styles.container}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 0, left: 20, zIndex: 99}}>
                        <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.header}>DEVELOPER INFO</Text>

                    <Text style={{fontWeight: '900', color: 'white', fontSize: 22, textAlign: 'center'}}>
                        At the crossroads of mythology, fitness, and interactive design, Spirit Olympus Games brings the ancient world to life with a modern twist. Passionate about storytelling and wellness, we created Spirit Olympus Games to inspire users through the legendary spirit of the Olympic Games.
                        Our mission is to blend historical insight with motivational gameplay — turning your goals into heroic quests. Whether you’re training like a Spartan, meditating with Zeus, or mastering ancient trivia, we’re here to guide you toward greatness — one challenge at a time.
                        Join us on this mythic journey.
                        Glory awaits.
                    </Text>
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
            paddingTop: 80,
            paddingHorizontal: 20,
        },
        header: {
            color: 'orange',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            alignSelf: 'center',
        },
        button: {
            backgroundColor: '#00d4ff',
            borderRadius: 35,
            paddingVertical: 22,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            marginVertical: 8,
            alignItems: 'center',
        },
        buttonText: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
