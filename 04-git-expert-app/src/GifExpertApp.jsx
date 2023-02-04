import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball Z']);

  const onAddCategory = (newCategory) => {

  
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

  }


  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory = { (value) => onAddCategory(value)}
      />
      {
        categories.map( (category) => (
          <GifGrid key={category}  category={category}/>
        ))
      }
        {/* Gif Item */}
    </>
  )
}
