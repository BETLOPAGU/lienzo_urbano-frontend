import { useDispatch, useSelector } from 'react-redux';
// import { calendarApi } from '../api';
import React from "react";

import { clearErrorMessage, onLogin, onLogout } from '../store';
import { useMutation as UseMutation, useQuery as UseQuery, gql } from '@apollo/client';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkAuthToken = () => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch( onLogout() );

        try{
            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: user.name, uid: user.id }) );
        
        }catch(error){
            localStorage.clear();
            dispatch( onLogout() );
        }
    }
    
    const startLogout = () => {
        localStorage.clear();       
        dispatch( onLogout() );
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogout,
        // startRegister,
    }

}