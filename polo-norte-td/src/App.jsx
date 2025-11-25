
import './App.css';
import Game from './Game';
import UpgradesBoard from './UpgradesBoard';
import { GameProvider } from './GameContext';

function App() {
  return (
    <>
      <GameProvider>
        <div class="container text-center">
          <div class="row">
            <Game />
            <UpgradesBoard />
          </div>
        </div>
      </GameProvider>
    </>
  )
}

export default App;
