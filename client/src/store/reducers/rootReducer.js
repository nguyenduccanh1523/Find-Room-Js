import authReducer from "./userReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ["isLoggedIn", "token"]
}


const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})

export default rootReducer