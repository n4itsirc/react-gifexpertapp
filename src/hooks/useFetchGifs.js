import { useState, useEffect } from 'react'
import { getGifts } from '../helpers/getGifts';

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGifts(categoria)
            .then( gifs => {
                setState({
                    data: gifs,
                    loading: false
                });
            })
    }, [categoria])

    return state;

}