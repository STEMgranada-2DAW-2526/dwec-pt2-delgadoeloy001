import { createContext, useReducer, useContext } from 'react'
import './App.css'

export const GameContext = createContext();

export const initialState = {
    caramels: 20,
    damagePerShot: 1,
    waveGoal: 100,
    damageDealt: 0,
    autoShotsPerSecond: 0,
    upgrades: []
};

function gameReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_CARAMELS':
            return {
                ...state,
                caramels: state.caramels + action.payload
            };
        case 'DECREMENT_CARAMELS':
            return {
                ...state,
                caramels: state.caramels - action.payload
            };
        case 'UPGRADE_DAMAGE':
            return {
                ...state,
                damagePerShot: state.damagePerShot + action.payload
            };
        default:
            return state;
    }

}

export default function GameProvider() {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGameContext() {
    return useContext(GameContext);
}
