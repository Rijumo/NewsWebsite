import React from 'react'

const Card = ({Data}) => {
  
   console.log(Data);
   
   
 return (
    
   <div className="card">
{Data.map((item,index)=>{
  if(!item.urlToImage){
    return null
  }

  else{
    return(
      <div className="carditem">
          <img src={item.urlToImage}/>
        <a href={item.url}>{item.title}</a>
        <p>{item.description}</p>
        <button onClick={()=>window.open(item.url)}>Read More</button>
     
 </div>
  ) 
  }
    
})}
   </div>
  )
}

export default Card
