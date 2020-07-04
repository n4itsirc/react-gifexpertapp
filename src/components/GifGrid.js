import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({categoria}) => {

    const { data:images, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {categoria} </h3>

            { loading && <p className="card animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GiftGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
