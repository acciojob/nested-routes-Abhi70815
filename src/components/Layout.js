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
            <li><Link to="/woman">Woman</Link></li>
            
        </ul>

            
        <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='woman' element={<Woman/>}>
               <Route path='grooming' element={<Grooming/>}/>
               <Route path='shirt' element={<Shirt/>}/>
            <Route path='trouser' element={<Trouser/>}/>
            <Route path='jewellery' element={<Jewellery/>}/>
               
            </Route>
        </Routes>

    </div>
  )
}


export default Layout