import { useContext, useState } from "react";
import { GameContext } from "./GameContext";

export default function Game() {
    const { state, dispatch } = useContext(GameContext);
    
    return (
        <div>
            <h1>Caramelos: {state.caramels}</h1>
            <h2>Daño por disparo: {state.damagePerShot}</h2>
            <h2>Objetivo de la oleada: {state.waveGoal}</h2>
            <h2>Daño infligido: {state.damageDealt}</h2>
            <h2>Disparos automáticos por segundo: {state.autoShotsPerSecond}</h2>
        </div>
    )
}

