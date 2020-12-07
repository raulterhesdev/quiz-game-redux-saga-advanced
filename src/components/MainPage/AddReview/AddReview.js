import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReviewStart } from '../../../store/actions/index';

const AddReview = () => {
	const userName = useSelector((state) => state.game.name);
	const [review, setReview] = useState('');
	const dispatch = useDispatch();

	const submitReview = () => {
		dispatch(addReviewStart({ name: userName, review }));
		setReview('');
	};

	return (
		<div>
			<label htmlFor='review'>Review:</label>
			<input
				type='text'
				value={review}
				onChange={(e) => {
					setReview(e.target.value);
				}}
			/>
			<button onClick={submitReview}>Submit</button>
		</div>
	);
};

export default AddReview;
