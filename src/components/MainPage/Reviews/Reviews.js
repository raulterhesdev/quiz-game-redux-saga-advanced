import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsStart } from '../../../store/actions/index';

const Reviews = () => {
	const dispatch = useDispatch();
	const reviews = useSelector((state) => state.reviews.reviews);

	useEffect(() => {
		dispatch(fetchReviewsStart());
	}, [dispatch]);

	const reviewsDisplay = reviews.map((review) => (
		<div key={review.id}>
			<p>{review.name}</p>
			<p>{review.date}</p>
			<p>{review.review}</p>
		</div>
	));

	return (
		<div>
			<h1>What users think of our game:</h1>
			<div>{reviewsDisplay}</div>
		</div>
	);
};

export default Reviews;
