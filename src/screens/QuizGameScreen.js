import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';

const questions = [
    {
        question: 'Which god was the ancient Olympic Games dedicated to?',
        options: ['Apollo', 'Zeus', 'Hermes', 'Ares'],
        correct: 1,
    },
    {
        question: 'What event combined boxing and wrestling in the ancient Olympics?',
        options: ['Hoplitodromos', 'Pankration', 'Pentathlon', 'Discus'],
        correct: 1,
    },
    {
        question: 'What did victors of the ancient Olympics receive as a prize?',
        options: ['Gold coin', 'Laurel wreath', 'Olive wreath', 'Statue of themselves'],
        correct: 2,
    },
    {
        question: 'Which hero is said to have founded the Olympic Games?',
        options: ['Heracles (Hercules)', 'Odysseus', 'Achilles', 'Theseus'],
        correct: 0,
    },
    {
        question: 'What was the running event in full armor called?',
        options: ['Stadion', 'Dromos', 'Hoplitodromos', 'Gymnikos'],
        correct: 2,
    },
    {
        question: 'Which of these was part of the ancient Pentathlon?',
        options: ['Marathon', 'Discus Throw', 'Archery', 'Horse racing'],
        correct: 1,
    },
    {
        question: 'Who was the goddess honored with a separate women\'s athletic festival?',
        options: ['Athena', 'Hera', 'Artemis', 'Demeter'],
        correct: 1,
    },
    {
        question: 'What symbol represented Zeus at Olympia?',
        options: ['Spear', 'Thunderbolt', 'Laurel crown', 'Eagle staff'],
        correct: 1,
    },
    {
        question: 'How often were the ancient Olympic Games held?',
        options: ['Every 2 years', 'Every 3 years', 'Every 4 years', 'Every year'],
        correct: 2,
    },
    {
        question: 'What rule applied to Olympic athletes before competing?',
        options: ['Must wear armor', 'Must sacrifice an animal', 'Must swear an oath to Zeus', 'Must win a local contest first'],
        correct: 2,
    },
];

export default function QuizGameScreen({ navigation }) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);

    const handleNext = () => {
        if (selected === questions[current].correct) {
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            navigation.navigate('QuizResultScreen', { score, total: questions.length });
        }
    };

    const currentQ = questions[current];

    return (
        <ImageBackground
            source={require('../assets/img/9a3bda5f5708591caf6f9aaae45878778f7e5f50.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.counter}>{current + 1}/{questions.length}</Text>
                    <Text style={styles.question}>{currentQ.question}</Text>
                </View>

                {currentQ.options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            selected === index && (index === currentQ.correct ? styles.correct : styles.wrong),
                        ]}
                        onPress={() => setSelected(index)}
                    >
                        <Text style={styles.optionText}>{`${index + 1}. ${option}`}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.nextButton} onPress={handleNext} disabled={selected === null}>
                    <Text style={styles.nextText}>Next</Text>
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
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный тёмный фон
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
    },
    container: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    counter: {
        fontSize: 22,
        color: 'orange',
        textAlign: 'center',
        marginBottom: 10,
    },
    question: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
    },
    option: {
        borderColor: '#00aaff',
        borderWidth: 2,
        borderRadius: 25,
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
    },
    correct: { backgroundColor: 'gold' },
    wrong: { backgroundColor: '#ff7676' },
    optionText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    nextButton: {
        backgroundColor: '#d073f3',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
    },
    nextText: {
        color: 'white',
        fontSize: 18,
    },
});
