import { NavLink } from "react-router-dom";

function NaveBar() {
  return (
    <nav className='navbar'>
    <NavLink to='/'
    className={({isActive})=>(isActive ? 'link': 'active')}>Home</NavLink>
    <NavLink to='/about'
    className={({isActive})=>(isActive ? 'link': 'active')}>About</NavLink>
    <NavLink to='/products'
   className={({isActive})=>(isActive ? 'link': 'active')}>Products</NavLink>
   <NavLink to='/login'
   className={({isActive})=>(isActive ? 'link': 'active')}>Login</NavLink>
   <NavLink to='/dashboard'
   className={({isActive})=>(isActive ? 'link': 'active')}>dashboard</NavLink>
  </nav>
  )
}

export default NaveBar
