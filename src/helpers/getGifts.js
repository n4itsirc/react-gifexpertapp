export const getGifts = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=ayT3U82LdRknN0YPxVbotR8zLJMGmF90`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifts;
}