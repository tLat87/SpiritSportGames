import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import GreekCompetitions from "./src/screens/GreekCompetitions";
import OlympicHistory from "./src/screens/OlympicHistory";
import CompetitionDetailScreen from "./src/screens/CompetitionDetailScreen";
import ChallengeScreen from "./src/screens/ChallengeScreen";
import GoalScreen from "./src/screens/GoalScreen";
import NoteDetailScreen from "./src/screens/NoteDetailScreen";
import QuizGameScreen from "./src/screens/QuizGameScreen";
import QuizResultScreen from "./src/screens/QuizResultScreen";
import DevInfoScreen from "./src/screens/DevInfoScreen";

const Stack = createStackNavigator();


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                    }}>

                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="GreekCompetitions" component={GreekCompetitions} />
                        <Stack.Screen name="OlympicHistory" component={OlympicHistory} />
                        <Stack.Screen name="CompetitionDetailScreen" component={CompetitionDetailScreen} />
                        <Stack.Screen name="ChallengeScreen" component={ChallengeScreen} />
                        <Stack.Screen name="GoalScreen" component={GoalScreen} />
                        <Stack.Screen name="NoteDetailScreen" component={NoteDetailScreen} />
                        <Stack.Screen name="QuizGameScreen" component={QuizGameScreen} />
                        <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
                        <Stack.Screen name="DevInfoScreen" component={DevInfoScreen} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
