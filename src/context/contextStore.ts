import { createContext } from "react";
import { initialTask, initialUser } from "./initialState";
import { Action } from "./reducer";
// import { initialState } from "./initialState";

type IState = {
    userStore?: typeof initialUser;
    taskStore?: typeof initialTask;
};
export const StateContext = createContext<IState>(null);
export const DispatchContext = createContext<React.Dispatch<Action>>(null);
export const SetContext = createContext({});
