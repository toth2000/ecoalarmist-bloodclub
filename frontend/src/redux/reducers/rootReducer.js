import { configureStore } from '@reduxjs/toolkit';
import bcMemberReducer from './bcMemberReducer';
const rootReducer=configureStore({
    reducer:{
        clubMember:bcMemberReducer
    }
})

export default rootReducer;