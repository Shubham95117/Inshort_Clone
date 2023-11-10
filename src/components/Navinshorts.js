import React from 'react'
import './Navinshorts.css'
import HamburgerDrawer from '../components/HamburgerDrawer'
const Navinshorts = ({setcategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
         <HamburgerDrawer setcategory={setcategory}/>
      </div>
      <img style={{cursor:'pointer'}} src="https://static.inshorts.com/inshorts-website/static_assets/bundle_assets/2023/10_oct/31_tue/304b66eaecbc1fb5822baa59f139755bf57fc1df.logo@2x.png" alt="inshort_logo" height='80%' />
    </div>
  )
}

export default Navinshorts
