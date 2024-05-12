
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">

      <header>
        <img src={require('./images/Logo-FCC.png')} alt='Logo FreeCodecamp' title='Logo FreeCodecamp'/>
      </header>

      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio 
          imagen='lucy'
          nombre='Lucy perez'
          pais='Francia'
          cargo='Web Developer'
          empresa='CheckPoint'
          testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        />

        <Testimonio 
          imagen='luis'
          nombre='Luis Fernandez'
          pais='Indonesia'
          cargo='DataAnalysti'
          empresa='DBI'
          testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        />

        <Testimonio 
          imagen='andres'
          nombre='Andres Gimenez'
          pais='Alemania'
          cargo='Desarrollador Back-End'
          empresa='Google'
          testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
       />        
      </div>
    </div>
  );
}

export default App;
