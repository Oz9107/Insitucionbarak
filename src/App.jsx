import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (

      <div>
        <Navbar />
        <div className="body-content">
            <Homepage />
            {/* Puedes agregar más rutas aquí para otras páginas */}
        </div>
      </div>

  );
}

export default App;
