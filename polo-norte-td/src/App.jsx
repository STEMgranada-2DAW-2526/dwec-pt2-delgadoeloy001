
import './App.css';
import Game from './Game';
import UpgradesBoard from './UpgradesBoard';
import { GameProvider } from './GameContext';
import torre from './assets/torre.png';


function App() {
  
  return (
    <>
      <GameProvider>
      <div class="container text-center">
        <div class="row">
        <Game />
        <div>
        <img src={torre} alt="asdf" style={{width: '600px', height: '600px'}}/>
        </div>
        <UpgradesBoard />
        </div>
      </div>
      </GameProvider>
    </>
    
    )
}

export default App;
