import React, { useState } from 'react';
import {
    View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {completeDay} from '../redux/slices/challengesSlice';

export default function GoalScreen({route, navigation}) {
    const {id} = route.params;
    const challengeId = id;

    const challenge = useSelector((state) =>
        state.challenges.find((c) => c.id === challengeId)
    );

    const dispatch = useDispatch();

    const toggleDay = (day) => {
        if (!challenge.completedDays.includes(day)) {
            dispatch(completeDay({ id: challengeId, day }));
        }
    };

    return (
      <ImageBackground
        source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
        style={styles.background}
        resizeMode="cover">
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 80, left: 20, zIndex: 99}}>
              <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>MY GOAL</Text>

          <Text style={styles.label}>Your Challenge</Text>
          <View style={styles.challengeBox}>
            <Text style={styles.challengeText}>Hercules’ Run</Text>
          </View>

          <Text style={styles.label}>Enter Duration</Text>
          <View style={styles.durationBox}>
            <Text style={styles.durationText}>1 week</Text>
          </View>

          <Text style={styles.label}>Track Your Progress</Text>

          {Array.from({length: 7}, (_, i) => {
            const day = 7 - i;
            const isDone = challenge.completedDays.includes(day);
            return (
              <View key={day} style={styles.dayRow}>
                <Text style={styles.dayText}>Day {day}</Text>
                <TouchableOpacity
                  style={[styles.dayButton, isDone && styles.dayDone]}
                  onPress={() => toggleDay(day)}>
                  <Text style={styles.buttonText}>
                    {isDone ? 'Done' : 'Select'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

          <View style={styles.messageBox}>
            <Text style={styles.message}>Good job, my son! Keep going.</Text>
            <Image
              source={require('../assets/img/03342e56d0b2bdb558b787fc00c60b30e6b59931.png')}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                bottom: -100,
                right: 0,
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: { padding: 20, paddingTop: 80 },
    title: { fontSize: 24, color: 'orange', fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    label: { color: 'white', fontSize: 16, marginTop: 20 },
    challengeBox: {
        backgroundColor: '#00dfff',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 5
    },
    challengeText: { color: 'white', fontWeight: 'bold' },
    durationBox: {
        backgroundColor: '#3c4c5c',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 5
    },
    durationText: { color: 'white' },
    dayRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    dayText: { color: 'yellow', fontSize: 16 },
    dayButton: {
        backgroundColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    dayDone: {
        backgroundColor: '#00cc44'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    messageBox: {
        backgroundColor: '#3c4c5c',
        padding: 15,
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center'
    },
    message: {
        color: 'gold',
        fontSize: 14,
        fontStyle: 'italic'
    }
});
