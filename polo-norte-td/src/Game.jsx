import { useContext,useState } from "react";
import { GameProvider } from "./GameContext";

export default function Game() {
    const { state, dispatch } = useContext(GameProvider);
    