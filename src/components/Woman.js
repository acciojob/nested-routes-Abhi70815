import React from 'react'
import { Link, Outlet} from 'react-router-dom'


const Woman = () => {
  return (
    <div>
     

        <p>Womans Items:</p>
        <ul>
            <li><Link to='Grooming'>Grooming</Link></li>
            <li><Link to='Shirt'>Shirt</Link></li>
            <li><Link to='Trouser'>Trouser</Link></li>
            <li><Link to='Jewellery'>Jewellery</Link></li>
        </ul>

        <Outlet/>
     
    </div>
  )
}

export default Woman