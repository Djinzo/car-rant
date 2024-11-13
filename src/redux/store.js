import { createStoreHook } from "react-redux";
import { reducer } from "./reducers";

export const store = createStoreHook(reducer, {});
