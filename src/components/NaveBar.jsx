import { Link } from "react-router-dom";

function NaveBar() {
  return (
    <nav className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/products'>Products</Link>
  </nav>
  )
}

export default NaveBar
