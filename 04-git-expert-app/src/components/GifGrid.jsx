
export const GifGrid = ({category}) => {

  const gifs = [1,2,3,4,5,6];

  const getGifs = async() => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8fbo4mXHoDHkxhTgC2MckhLvLOI38JlN&q=${category}`;
    const resp = await fetch(url);

    console.log(resp);

  }

  getGifs();

  return (
    <>
      <h3>{category}</h3>
      {
        gifs.map(gif => (
          <p>{gif}</p>
        ))
      }
    </>
  )
}
