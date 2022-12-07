export const getGifs = async (category: string): Promise<any> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m1QhJgob2l0JUHU2Th1cd4crukHjmzoG&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}