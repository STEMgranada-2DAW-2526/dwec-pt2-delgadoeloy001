import { useState, useContext, use, useReducer } from "react";
import { GameContext } from "./GameContext";

const upgradesList = [
    "Cañon de Turron Explosivo",
    "RenosLanzamisiles",
    "Árbol de Navidad Laser"
]

function CostUpgrades() {
    const { state } = useContext(GameContext);
    let cost = 0;
    if (state.upgrades.length = 0) {
        cost = 10;
    } else if (state.upgrades.length = 1) {
        cost = 30;
    } else if (state.upgrades.length = 2) {
        cost = 50
    }
    return cost
}

function DmgUpgrades() {
    const { state } = useContext(GameContext);
    let dmg = 0;
    if (state.upgrades.length = 0) {
        dmg = 2;
    } else if (state.upgrades.length = 1) {
        dmg = 5;
    } else if (state.upgrades.length = 2) {
        dmg = 10
    }
    return dmg
}

function CostMultipliers() {
    const { state } = useContext(GameContext);
    let cost = 10 + state.autoShotsPerSecond * 0.2;
    return cost
}

export default function UpgradesBoard() {
    const { state } = useContext(GameContext);
    const [dispatch]= useReducer(GameContext);
    return (
        <div>
            <h2>Mejoras Disponibles</h2>
            <button onclick={() => {
                let cost = CostUpgrades();
                console.log(cost);
                let dmg = DmgUpgrades();
                    if (state.caramels >= cost) {
                        dispatch({ type: 'DECREMENT_CARAMELS', payload: cost });
                        dispatch({ type: 'UPGRADE_DAMAGE', payload: dmg });
                        dispatch({ type: 'ADD_UPGRADE', payload: upgradesList[0] });
                    }
            }}>Mejorar Daño ({CostUpgrades()} caramelos)</button>
            <h2>Comprar multiplicador</h2>
            <button onclick={() => {
                let cost = CostMultipliers();
                if (state.caramels >= cost) {
                    dispatch({ type: 'DECREMENT_CARAMELS', payload: cost });
                    dispatch({ type: 'INCREMENT_AUTO_SHOTS', payload: 1 });
                }
            }}>Comprar multiplicador ({CostMultipliers()} caramelos)</button>
        </div>
    );
}