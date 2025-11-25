import { useEffect, useReducer } from 'react'
import './App.css'

export const GameContext = React.createContext();

export default function GameProvider() {
    const [candy, setCandy] = useState(0);
    const [damagePerShot, setDamagePerShot] = useState(0);
    const [mejorasCañon, setMejorasCañon] = useState(0);
    const [oleada, setOleada] = useState(0);


}
