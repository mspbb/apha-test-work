import { configureStore } from '@reduxjs/toolkit'
import likesSlice from '@/app/providers/likesSlice'
import removeSlice from '@/app/providers/removeSlice';
import addFruitSlice from '@/app/providers/addFruitSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			likes: likesSlice,
			removed: removeSlice,
			addFruit: addFruitSlice,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']