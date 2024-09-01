import React from 'react'
import { Link,  Route, Routes } from 'react-router-dom'
import Home from './Home'
import Woman from './Woman'
import Grooming from './Grooming'
import Shirt from './Shirt'
import Trouser from './Trouser'
import Jewellery from './Jewellery'

const Layout = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/women">Women</Link></li>
            
        </ul>

            
        <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='women' element={<Woman/>}>
               <Route path='Grooming' element={<Grooming/>}/>
               <Route path='Shirt' element={<Shirt/>}/>
            <Route path='Trouser' element={<Trouser/>}/>
            <Route path='Jewellery' element={<Jewellery/>}/>
               
            </Route>
        </Routes>

    </div>
  )
}


export default Layout