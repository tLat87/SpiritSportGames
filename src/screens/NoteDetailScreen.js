import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity} from 'react-native';

const noteDetails = {
    '1': {
        title: 'Strength in Stillness',
        experience: 'Today’s strength session left my muscles trembling, especially in my shoulders and legs. I pushed past my limits during the final round. My breath was heavy, but it felt earned. A deep ache settled in, but not in a painful way — more like a reminder that I am becoming something stronger with every rep.',
        goal: 'My main goal is to cultivate consistency. Strength alone isn’t enough — I want to master patience and presence during every challenge. Like a temple stands through storms, I must remain grounded. I remind myself daily that power lies in showing up, not showing off.',
        award: 'Courage',
    },
    '2': {
        title: 'Fire in the Legs',
        experience: 'Ran the full Hercules route today. My thighs burned by the halfway mark. It was humid, and every breath felt like dragging a shield. But once I found a rhythm, something unlocked — the pain became fuel, and the finish line came into view like a promise fulfilled.',
        goal: 'This week I want to improve endurance and stop doubting my limits. The body complains, but the spirit commands. I’ll treat every run like a rite of passage — the road ahead is long, but the only way forward is through. I run not to escape, but to transform.',
        award: 'Self-Control',
    },
    '3': {
        title: 'Warrior’s Breath',
        experience: 'Post-workout today, I took 10 minutes in silence under the olive tree. My heart was still racing from the lifts, but my breath slowed with every inhale. The world faded. No noise, just pulse and presence. That silence was heavier than the weights I lifted — and more valuable.',
        goal:'I want to start and end each session with stillness. Movement awakens the body, but reflection awakens the soul. My mind is a weapon — it must be sharpened with peace. Zeus favors those who act with purpose. I seek not just strength, but clarity.',
        award: 'Fire',
    },
    '4': {
        title: 'No Victory Without Sweat',
        experience: 'The grappling drill today was brutal. My opponent pushed harder than expected, and I felt myself fading. But I didn’t stop. My body screamed, yet something louder said “Don’t fall.” I walked away drenched, dizzy — and deeply proud. My body feels like it’s evolving, layer by layer.',
        goal: 'This challenge is about more than physical gains. I want to break the part of me that settles. I will meet resistance and shake its hand. Each day is one step closer to mastering myself. I won’t chase comfort — I’ll chase growth. Glory demands effort.',
        award: 'Courage',
    },
    '5': {
        title: 'Mind Over Muscle',
        experience: 'Low energy today. I didn’t want to move — the couch whispered promises. But I laced my sandals and trained. Not intensely, not impressively. But I showed up. And that made it a victory. My body felt tired but proud, and Zeus’ gaze felt just a little warmer.',
        goal: 'The goal is to build a habit, not a highlight reel. Some days will be heroic, others humble. But every day I train is a vow to my future self. I seek Olympus not in strength alone, but in the promise to return, again and again, with resolve.',
        award: 'Self-Control',
    },
};

export default function NoteDetailScreen({ route, navigation }) {
    const { noteId, title } = route.params;
    const note = noteDetails[noteId];

    return (
        <ImageBackground source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')} style={styles.background}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>NOTES</Text>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute", top: 20, left: 20, zIndex: 99}}>
                    <Text style={{ fontSize: 16, color: 'orange', fontWeight: '900'}}>{"< Back"}</Text>
                </TouchableOpacity>
                <View style={styles.titleBadge}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.sectionTitle}>Experience</Text>
                <Text style={styles.sectionContent}>{note?.experience}</Text>
                <Text style={styles.sectionTitle}>Personal Goal & Motivation</Text>
                <Text style={styles.sectionContent}>{note?.goal}</Text>
                <Text style={styles.awardLabel}>Award from Zeus</Text>
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: 22,
                    borderRadius: 32,
                    alignItems: 'center',
                }}>
                    <Image source={require('../assets/img/medal-champion-award-winner-olympic-61.png')} style={{width: 150, height: 150}} />
                    <Text style={styles.award}>{note?.award}</Text>
                </View>
                <View style={{marginBottom: 50}}/>
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

    },    header: { color: 'orange', fontSize: 32, textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },
    titleBadge: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 22,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
    },
    title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    sectionTitle: { color: '#fff', fontSize:22,fontWeight: '700', marginTop: 20, marginBottom: 6 },
    sectionContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 22,
        borderRadius: 32,
    },
    awardLabel: { color: '#fff', fontSize: 32, marginTop: 20, textAlign: 'center', marginBottom: 20, fontWeight: '900' },
    award: { color: 'orange', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});
