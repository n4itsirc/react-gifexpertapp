import React, { useState } from 'react'
import { AgregarCategoria } from './components/AgregarCategoria'
import { GifGrid } from './components/GifGrid'

export const GiftExpertapp = () => {
    

    const [categorias, setCategorias] = useState(['One Punch'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AgregarCategoria setCategorias={ setCategorias }/>
            <hr />

            <ol>
                {
                    categorias.map( categoria => 
                        <GifGrid key={ categoria } categoria={categoria} />
                    )
                }
            </ol>
            
        </>
    )
}
