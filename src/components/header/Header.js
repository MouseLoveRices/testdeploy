import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  const [collapsed,setCollapsed] = useState(true)
  const toggleNavbar = ()=> setCollapsed(!collapsed)
  const {cart} = useContext(AppContext)
  return (
    <div>
      <Navbar color='faded' light expand="md">
        <NavbarBrand href='/' className='me-auto'>
            reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='me-2'/>
        <Collapse isOpen={!collapsed} navbar>

        </Collapse>

          <Link to="/cart">Cart <span>{cart.length}</span></Link>

      </Navbar>
    </div>
  )
}
