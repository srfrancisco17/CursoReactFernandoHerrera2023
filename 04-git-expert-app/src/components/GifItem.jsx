import React from 'react';

export const GifItem = ({title, url, id}) => {
  console.log({title, url});

  
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  )
}
