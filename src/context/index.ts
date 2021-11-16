import { createContext } from "react";
import { ContextState } from "../types/context";

export default createContext<ContextState>({state: false, setState: () => false});
