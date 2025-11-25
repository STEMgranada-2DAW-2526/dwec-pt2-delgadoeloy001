import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <GameProvider>
        <div class="container text-center">
          <div class="row">
            <Game />
            <UpgradesBoard />
          </div>
          <Tablero />
        </div>
      </GameProvider>
    </>
  )
}

export default App;
