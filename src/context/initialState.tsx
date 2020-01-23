import useCombinedReducers from "use-combined-reducers";
import { useReducer, useState } from "react";
import { taskReducer, userReducer, UserState } from "./reducer";
import { StateContext, DispatchContext, SetContext } from "./contextStore";
import * as React from "react";

export const initialTask = {
    title: "",
    content: "",
    email: ""
};

export const initialUser = {
    auth: false,
    userId: ""
};

export const AllContext = (props: any) => {
    const { children } = props;

    const [globalState, globalDispatch] = useCombinedReducers({
        userStore: useReducer(userReducer, initialUser),
        taskStore: useReducer(taskReducer, initialTask)
    });
    return (
        <DispatchContext.Provider value={globalDispatch}>
            <StateContext.Provider value={globalState as any}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};
