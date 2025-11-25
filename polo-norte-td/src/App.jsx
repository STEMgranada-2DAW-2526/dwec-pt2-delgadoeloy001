import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <GameProvider>
        <div class="container text-center">
          <div class="row">
            <Ruleta />
            <Dineros />
          </div>
          <Tablero />
        </div>
      </RuletaProvider>
    </>
  )
}

export default App;
