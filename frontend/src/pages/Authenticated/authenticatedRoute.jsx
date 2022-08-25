//this fires up before accessing a protected route
//does not have any html content
//redirects to the desired route if authenticated other wise redirects to login route


import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import { authenticate, logout, MEMBERSTATUS } from '../../redux/reducers/bcMemberReducer';

const AuthenticatedRoute=()=> {
    const status = useSelector((state) => state.clubMember.status);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        const id=localStorage.getItem('id');
        const accesstoken=localStorage.getItem('accesstoken');
        const refreshtoken=localStorage.getItem('refreshtoken');
        console.log(accesstoken);
        if(!id || !accesstoken ||  !refreshtoken){
            dispatch(logout());
            navigate('/bloodclub/login');
            return;
        }
        if(status===MEMBERSTATUS.AUTHORIZED)return;

        //fake auth call for authentication
        //requires id,accesstoken,refreshtoken
        //if verified
        //  sets name,email,group,id,accesstoken,refreshtoken,phone,isVerified using redux
        //else redirects to login page
        setTimeout(() => {
            dispatch(authenticate({
                name:'Dummy name',
                email:'Dummy name',group:'A+',
                id,accesstoken,
                refreshtoken,
                phone:'Dummy phone',
                isVerified:true
            }))
        }, 2000);
    },[status])
    if(status===MEMBERSTATUS.LOADING)return(<div>Loading</div>)
    if(status===MEMBERSTATUS.AUTHORIZED)return(<Outlet/>);
    return (<div></div>)
}

export default AuthenticatedRoute