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
        case 'ADD_UPGRADE':
            return {
                ...state,
                upgrades: state.upgrades.push(action.payload)
            };
        case 'INCREMENT_AUTO_SHOTS':
            return {
                ...state,
                autoShotsPerSecond: state.autoShotsPerSecond + action.payload
            };
        case 'NEXT_WAVE':
            return {
                ...state,
                waveGoal: state.waveGoal + state.waveGoal * 0.1,
                caramels: state.caramels + 10
            };
        case 'DEAL_DAMAGE':
            return {
                ...state,
                damageDealt: state.damageDealt + action.payload
            };
        case 'RESET_DAMAGE':
            return {
                ...state,
                damageDealt: 0
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
