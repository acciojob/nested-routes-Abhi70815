import React from 'react'
import { Link, Outlet} from 'react-router-dom'


const Woman = () => {
  return (
    <div>
     

        <p>Womans Items:</p>
        <ul>
            <li><Link to='grooming'>Grooming</Link></li>
            <li><Link to='shirt'>Shirt</Link></li>
            <li><Link to='trouser'>Trouser</Link></li>
            <li><Link to='jewellery'>Jewellery</Link></li>
        </ul>

        <Outlet/>
     
    </div>
  )
}

export default Woman