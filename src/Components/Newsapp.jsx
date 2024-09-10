import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {

    const[search,setSearch] = useState("india");
    const[newsData, setNewsData] = useState(null);
    const API = "57385cec172648fabc375d43ce1284fd";
    const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`);
    const data = await response.json();
    console.log(data.articles);
    setNewsData(data.articles);
    }

useEffect(()=>{
    getData()
},[])



    const handelinput = (e)=>{
        console.log(e.target.value)
        setSearch(e.target.value);
     
    }
    const userData =(e)=>{
       setSearch(e.target.value)
    }
   return (

      <div>
        <nav>
            <div>
                <h1>Trending News </h1>
            </div>
            <ul>
                <a href="">All News</a>
                <a href="">Trending</a>
            </ul>
            <div className="serachbar">
                <input type="text"  placeholder='Seach News' value={search} onChange={handelinput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div className="categoryBtn">
            <div className="categoryBtn_item1">
            <h1>Stay Update with TrendyNews!</h1>
            </div>
            <div className="categoryBtn_item2">
            <button onClick={userData} value="Sports">Sports</button>
            <button onClick={userData} value="Politics">Politics</button>
            <button onClick={userData} value="Entertainment">Entertainment</button>
            <button onClick={userData} value="Health">Health</button>
            <button onClick={userData} value="Fitness">Fitness</button>
            </div>
           
        </div>
        <div>
            {newsData ? <Card Data={newsData}></Card>:null}
        </div>
      </div>
    
  )
}

export default Newsapp
