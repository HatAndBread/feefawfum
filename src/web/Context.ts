import { createContext, useContext } from "react";
import { ContextProps } from "../@types/ContextProps";
export const AppContext = createContext<Partial<ContextProps>>({});
export const useAppContext = () => useContext(AppContext);

