import { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameContext";

function AdvanceWave() {
    const { state, dispatch } = useContext(GameContext);
    if (state.waveGoal <= state.damageDealt) {
        dispatch({ type: 'NEXT_WAVE' });
    }
}

export default function Game() {
    const { state, dispatch } = useContext(GameContext);
    AdvanceWave();

    return (
        <div>
            <button onClick={() => { dispatch({ type: 'DEAL_DAMAGE', payload: state.damagePerShot }) }}>Diparar</button>
            <h1>Caramelos: {state.caramels}</h1>
            <h2>Daño por disparo: {state.damagePerShot}</h2>
            <h2>Objetivo de la oleada: {state.waveGoal}</h2>
            <h2>Daño infligido: {state.damageDealt}</h2>
            <h2>Disparos automáticos por segundo: {state.autoShotsPerSecond}</h2>
        </div>
    )
}



