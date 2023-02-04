import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);


  const getImages = async() => {
    const newImages = await getGifs(category);
    console.log(newImages);
    
    setImages(newImages);
  }

  useEffect( () => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map( (image) =>  (
            
            <GifItem key={image.id}
            {...image} 
            />
          ))
        }
      </div>
    </>
  )
}
