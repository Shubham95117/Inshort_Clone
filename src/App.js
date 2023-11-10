
import { useEffect, useState } from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category,setcategory]=useState('general')
  const [newsArray,setnewsArray]=useState([])
  const [newsResult,setnewsResult]=useState()
  const[loadmore,setLoadmore]=useState(20)
  const newsApi=async()=>{
    try{
      
      const news=await axios.get(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`)

      setnewsArray(news.data.articles)
      setnewsResult(news.data.totalResults)
    //  console.log(newsArray)
    //  console.log(newsResult)
    }
    catch(error){
   console.log(error)
    }
  }

  useEffect(()=>{
    newsApi();
  },[category,newsResult,loadmore]);


  return (
    <div className="App">
      <Navinshorts setcategory={setcategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore}
      setLoadmore={setLoadmore}/>
      <Footer/>
    </div>
  );
}

export default App;

