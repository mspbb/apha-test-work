'use client';

import { useActionState } from 'react';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { useAppDispatch } from '@/app/store/hooks';
import { addFruit } from '@/app/providers/addFruitSlice';

export type State = {
	errors?: {
		fruitName?: string[];
		fruitFamily?: string[];
	};
	message?: string | null;
};

type CreatedFruit = {
	name: string,
	family: string
}

const FormSchema = z.object({
	fruitName: z.string()
		.min(3),
	fruitFamily: z.string()
		.min(3)
});

const CreateProduct = FormSchema.omit({});

export default function Form() {
	const initialState: State = { message: null, errors: {} };
	const [state, formAction] = useActionState(createProduct, initialState);
	const dispatch = useAppDispatch();

	function createProduct(prevState: State, formData: FormData) {
		const validatedFields = CreateProduct.safeParse({
			fruitName: formData.get('fruitName'),
			fruitFamily: formData.get('fruitFamily')
		});

		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
				message: 'Missing Fields. Failed to Create.',
			};
		}

		const { fruitName, fruitFamily } = validatedFields.data;
		const createdFruit: CreatedFruit = {
			name: fruitName,
			family: fruitFamily
		}

		try {
			dispatch(addFruit(createdFruit));
			console.log('ok');
		} catch (error) {
			return {
				message: 'Error: Failed to Create Product.',
			};
		}

		redirect('/create-product/done');
	}

	return (
		<form action={formAction}>
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				<div className="mb-4">
					<label htmlFor="fruit-name" className="mb-2 block text-sm font-medium">
						Fruit name
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="fruit-name"
								name="fruitName"
								type="text"
								placeholder="Enter fruit-name"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="fruit-name-error"
							/>
						</div>
						<div id="fruit-name-error" aria-live="polite" aria-atomic="true">
							{state.errors?.fruitName &&
								state.errors.fruitName.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="fruit-family" className="mb-2 block text-sm font-medium">
						Fruit family
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="fruit-family"
								name="fruitFamily"
								type="text"
								placeholder="Enter fruit-family"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="fruit-family-error"
							/>
						</div>
						<div id="fruit-family-error" aria-live="polite" aria-atomic="true">
							{state.errors?.fruitFamily &&
								state.errors.fruitFamily.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex justify-end gap-4">
				<button type="submit">Create</button>
			</div>
		</form>
	);
}
