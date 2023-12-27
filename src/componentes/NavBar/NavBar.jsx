import CarWidget from './CarWidget.jsx/CarWidget';
import './NavBar.css';


function NavBar() {
  return (
    <header>
    <h1>Zapatillas Jordan</h1>
    <nav>
        <ul>
            <li>Productos</li>
            <li>Inicio</li>
            <li>Sobre nosotros</li>
        </ul>
    </nav>
    <><CarWidget/>
</header>
  )
}

export default NavBar