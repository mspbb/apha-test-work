import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
	item: { name: string, family: string }
};

const initialState: State = {
	item: {
		name: '',
		family: ''
	}
};

export const addFruitSlice = createSlice({
	name: 'addFruit',
	initialState,
	reducers: {
		addFruit: (state, action: PayloadAction<{}>) => {
			/* @ts-ignore */
			state.item = action.payload;
		}
	},
})

export const { addFruit } = addFruitSlice.actions
export default addFruitSlice.reducer