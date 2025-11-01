import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
	items: number[]
};

const initialState: State = {
	items: []
};

export const removeSlice = createSlice({
	name: 'removed',
	initialState,
	reducers: {
		remove: (state, action: PayloadAction<number>) => {
			state.items.push(action.payload);
		}
	},
})

export const { remove } = removeSlice.actions
export default removeSlice.reducer