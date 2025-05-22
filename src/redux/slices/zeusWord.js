import {StyleSheet} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isZeusPromptsEnabled: true,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleZeus: (state, action) => {
            state.isZeusPromptsEnabled = !state.isZeusPromptsEnabled;
        },
    }
})

export const { toggleZeus } = settingsSlice.actions;
export default settingsSlice.reducer;
