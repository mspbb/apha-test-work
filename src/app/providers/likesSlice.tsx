import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
	items: number[]
};

const initialState: State = {
	items: []
};

export const likesSlice = createSlice({
	name: 'likes',
	initialState,
	reducers: {
		like: (state, action: PayloadAction<number>) => {
			if (state.items.includes(action.payload)) {
				state.items = state.items.filter(item => item !== action.payload);
			} else {
				state.items = [...state.items, action.payload];
			}
		}
	},
})

export const { like } = likesSlice.actions
export default likesSlice.reducer