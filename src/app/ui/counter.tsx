'use client'

import { useAppSelector, useAppDispatch } from '@/app/store/hooks'
import { increment, decrement } from '@/app/providers/counterSlice'

export default function Counter() {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()

	return (
		<div>
			<button onClick={() => dispatch(decrement())}>-</button>
			<span>{count}</span>
			<button onClick={() => dispatch(increment())}>+</button>
		</div>
	)
}