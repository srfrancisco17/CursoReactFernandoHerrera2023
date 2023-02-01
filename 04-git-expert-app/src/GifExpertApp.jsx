import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
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

      {/* Listado de Gif */}
      <button onClick={() => onAddCategory()   }>Agregar</button>
      <ol>
        {
          categories.map( category => {
           return <li key={category}>{category}</li>;
          })
        }
      </ol>
        {/* Gif Item */}
    </>
  )
}
