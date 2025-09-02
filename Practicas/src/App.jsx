import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router'
import NewMovie from './components/newMovie/NewMovie'
import Navbar from './components/navbar/Navbar'
import Billboard from './components/billboard/Billboard'


const peliculas = [
  {
    id: 1,
    titulo: "Inception",
    director: "Christopher Nolan",
    genero: "Ciencia Ficción",
    duracion: 148, // en minutos
    anio: 2010
  },
  {
    id: 2,
    titulo: "The Godfather",
    director: "Francis Ford Coppola",
    genero: "Drama / Crimen",
    duracion: 175,
    anio: 1972
  }
]; 

function App() { 

  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/billboard" element={<Billboard />} />
      <Route path="/newmovie" element={<NewMovie />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
