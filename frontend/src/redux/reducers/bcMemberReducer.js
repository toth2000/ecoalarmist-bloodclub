//member status reducer

import { createSlice } from '@reduxjs/toolkit'

//status of the user intial would be UNAUTHORIZED
export const MEMBERSTATUS = {
  UNAUTHORIZED: "UNAUTHORIZED",
  AUTHORIZED: "AUTHORIZED",
  LOADING: "LOADING"
}

export const counterSlice = createSlice({
  name: 'Blood Club Member',
  initialState: {
    status:MEMBERSTATUS.LOADING,
    data:null
  },
  reducers: {
    authenticate: (state,action) => {
        const obj={
            id:action.payload.id,
            name:action.payload.name,
            email:action.payload.email,
            phone:action.payload.phone,
            group:action.payload.group,
            accesstoken:action.payload.accesstoken,
            refreshtoken:action.payload.refreshtoken,
            isVerified:action.payload.isVerified
        }
        //adding user data to the localstorage
        localStorage.setItem('id',obj.id);
        localStorage.setItem('accesstoken',obj.accesstoken);
        localStorage.setItem('refreshtoken',obj.refreshtoken);

        state.status=MEMBERSTATUS.AUTHORIZED
      state.data=obj;
    },
    logout: (state) => {
      state.status=MEMBERSTATUS.UNAUTHORIZED;

      //removing user data from the local storage
      localStorage.removeItem('id');
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('refreshtoken');


      state.data=null;
    }
  },
})
//exporting the actions
export const { authenticate, logout } = counterSlice.actions

export default counterSlice.reducer