export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=8fbo4mXHoDHkxhTgC2MckhLvLOI38JlN&q=${category}`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium_url,
  }));

  console.log(gifs);
  return gifs;
}