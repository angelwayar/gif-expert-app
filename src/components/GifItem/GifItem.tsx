import React from 'react';
export interface GifItemInterface {
	title: string;
	url: string
}

const GifItem: React.FC<GifItemInterface> = ({ title, url }) => {
	return (
		<div className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifItem;
