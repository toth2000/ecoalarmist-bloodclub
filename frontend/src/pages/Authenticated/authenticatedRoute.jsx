import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import { authenticate, MEMBERSTATUS } from '../../redux/reducers/bcMemberReducer';

const AuthenticatedRoute=()=> {
    const status = useSelector((state) => state.clubMember.status);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        const id=localStorage.getItem('id');
        const accesstoken=localStorage.getItem('accesstoken');
        const refreshtoken=localStorage.getItem('refreshtoken');
        if(status===MEMBERSTATUS.AUTHORIZED)return;
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
    return (<div>{window.location='/bloodclub/login'}</div>)
}

export default AuthenticatedRoute