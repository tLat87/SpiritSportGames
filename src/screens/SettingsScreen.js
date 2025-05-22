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
    Switch, Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {toggleZeus} from '../redux/slices/zeusWord';
import {resetAllData, resetChallenge} from '../redux/slices/challengesSlice';

export default function SettingsScreen({ navigation }) {
    const isZeusPromptsEnabled = useSelector(state => state.settings.isZeusPromptsEnabled);
    const dispatch = useDispatch();

    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
        >
            <ScrollView style={styles.container}>
                <Text style={styles.header}>NOTES</Text>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Prompts from Zeus</Text>
                    <Switch
                        value={isZeusPromptsEnabled}
                        onValueChange={() => dispatch(toggleZeus())}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isZeusPromptsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        Linking.openURL('https://www.termsfeed.com/live/7ac77feb-9351-4362-a42e-7d44744d3d03');
                    }}>
                    <Text style={styles.buttonText}>Privacy & Security</Text>
                    <Image source={require('../assets/img/chevron.right.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                       navigation.navigate('DevInfoScreen');
                    }}>
                    <Text style={styles.buttonText}>Developer Info</Text>
                    <Image source={require('../assets/img/chevron.right.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        dispatch(resetChallenge());
                        Alert.alert(
                            'You just reset your challenges',
                        )
                    }}>
                    <Text style={styles.buttonText}>Reset All Data</Text>
                    <Image source={require('../assets/img/chevron.right.png')} />
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
