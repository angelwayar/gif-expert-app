import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifItem } from '../GifItem';
export interface GifGridInterface {
	category: string
}

const GifGrid: React.FC<GifGridInterface> = ({ category }: GifGridInterface) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading &&
				(<h2 className="hidden">Cargando...</h2>)
			}
			<div className='card-grid'>
				{
					images.map(({ id, title, url }) => (
						<GifItem key={id} title={title} url={url} />
					))
				}
			</div>
		</>
	);
};

export default GifGrid;
