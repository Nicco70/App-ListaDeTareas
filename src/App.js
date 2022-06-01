import './App.css';
import logo from './imagenes/lista-tareas.png';
import ListaDeTareas from './componentes/ListadeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='titulo-lista'>
        <img
          src={logo}
          className='logo-lista' />
      </div>
      <div  className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
