import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({newsArray,newsResult,loadmore,setLoadmore}) => {
  return (
    <Container sx={{width:'70%'}} maxWidth='md'>
      <div className='content'>
        <div className='downloadMessage'>
            <span className='downloadText'>
                For the best experience use inshorts app on your smartphone
            </span>
            <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="app store" height='60%'/>
            <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="play  store"  height='60%' />
        </div>
      
      
      {
        newsArray.map((newsItem)=>(

            <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))
      }
      {
        loadmore<=newsResult  && 
        <>
          <hr/>
      <button className='loadmore' onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
        </>
      }
    
      </div>
    </Container>
  )
}

export default NewsContent
