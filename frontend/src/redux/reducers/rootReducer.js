//root reducers of all the reducers in frontend

import { configureStore } from '@reduxjs/toolkit';
import bcMemberReducer from './bcMemberReducer';


const rootReducer=configureStore({
    reducer:{
        clubMember:bcMemberReducer
    }
})

export default rootReducer;