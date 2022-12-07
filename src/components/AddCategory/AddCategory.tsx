import React, { useState } from 'react';


export interface AddCategoryInterface {
	onNewCategory: (newCategory: string) => void
}

const AddCategory: React.FC<AddCategoryInterface> = ({ onNewCategory }: AddCategoryInterface) => {
	const [inputValue, setInputValue] = useState("");
	const onInputChange = (newValue: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(newValue.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 1) return;
		onNewCategory(newInputValue)
		setInputValue('');
	};

	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
			<h1>{inputValue}</h1>
		</form>
	);
};

export default AddCategory;
