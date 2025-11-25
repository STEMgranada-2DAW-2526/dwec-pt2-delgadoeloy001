import { useContext,useState } from "react";
import { GameContext } from "./GameContext";

const [state, dispatch] = useReducer(gameReduced, INITIAL_STATE)