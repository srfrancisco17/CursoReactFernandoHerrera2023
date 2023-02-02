import { useEffect } from "react";
import { getGifs } from "../helpers/getGifts";


export const GifGrid = ({category}) => {


  useEffect( () => {
    getGifs(category);

  }, []);

  return (
    <>
      <h3>{category}</h3>

    </>
  )
}
