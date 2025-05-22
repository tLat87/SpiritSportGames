// redux/slices/challengesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 'pankration',
        title: '7 days of Pankration',
        duration: 7,
        completedDays: [],
        image: require('../../assets/img/a7157febbb62e559c89d2768297adc771f0049ae.png'),
        description: `Unleash your inner warrior through seven days of high-intensity strength training...`,
    },
    {
        id: 'hercules',
        title: 'Hercules Run',
        duration: 7,
        completedDays: [],
        image: require('../../assets/img/237928a224a7575a34c03c44c95035cd23feff36.png'),
        description: `Endurance and sprinting challenge inspired by Heracles' labors...`,
    },
    {
        id: 'zeus',
        title: 'Day of Silence of Zeus',
        duration: 7,
        completedDays: [],
        image: require('../../assets/img/13e378cfd8566223eb7f8eb8712beb82b73a26f2.png'),
        description: `Mental resilience challenge. Each day: no phone, meditation, silence.`,
    },
];

const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        completeDay: (state, action) => {
            const { id, day } = action.payload;
            const challenge = state.find((c) => c.id === id);
            if (challenge && !challenge.completedDays.includes(day)) {
                challenge.completedDays.push(day);
            }
        },
        resetChallenge: (state, action) => {
            const challenge = state.find((c) => c.id === action.payload);
            if (challenge) {
                challenge.completedDays = [];
            }
        },
        resetAllData: (state, action) => {
            return initialState;
        }
    },
});

export const { completeDay, resetChallenge , resetAllData} = challengesSlice.actions;
export default challengesSlice.reducer;
