import { useDispatch, useSelector } from 'react-redux';
// import { calendarApi } from '../api';
import React from "react";

import { clearErrorMessage, onLogin, onLogout } from '../store';
import { useMutation as UseMutation, useQuery as UseQuery, gql } from '@apollo/client';


// const LOGIN_QUERY = gql`
// mutation Login($loginInput: LoginInput!) {
//     login(loginInput: $loginInput) {
//         token
//         user {
//             id
//             firstName
//         }
//     }
// }
// `;

// export const useTest = () => {
//     const [counter, setCounter] = React.useState(0)


//     const loginInput = {
//         email: 'gerardo@arceo.com',
//         pass: 'password'
//       }

//     const LOGIN_QUERY = gql`
//     {
//     login(loginInput: ${loginInput}) {
//         token
//         user {
//         id
//         firstName
//         }
//     }
//     }`;

//     const USER_QUERY = gql`
//     {
//     artworks {
//         id
//     }
//     }
//     `;

//     try {
//         console.log("HOLA2")
//         const data = UseQuery(USER_QUERY);
//         console.log("HOLA2", data)
//         console.log(data);
//         localStorage.setItem('token', data.token);
//     } catch (error) {

//     }
// }

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    // const startLogin = async( { data, loading, error} ) => {
    //     try {
    //         //Data gotten back from the fetch
    //         // const { data, loading, error } = UseMutation(LOGIN_QUERY, {
    //         //     loginInput: {
    //         //         email: { correo },
    //         //         pass: { password }
    //         //     }
    //         // });

    //         if (loading) return "Cargando ...";
    //         if (error) return <pre>{error.message}</pre>


    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('token-init-date', new Date().getTime());
    //         dispatch(onLogin({ name: data.name, id: data.id }));

            
    //     } catch (error) {
    //         dispatch(onLogout('Credenciales incorrectas' + error));
    // //         console.log(error);
    // //         setTimeout(() => {
    // //             dispatch(clearErrorMessage());
    // //         }, 10);
    // //     }
    // // }

    // const startRegister = () => {

    //     const loginInput = {
    //         email: 'gerardo@arceo.com',
    //         pass: 'password'
    //       }

    //     const LOGIN_QUERY = gql`
    //     {
    //     login(loginInput: ${loginInput}) {
    //         token
    //         user {
    //         id
    //         firstName
    //         }
    //     }
    //     }`;

    //     const USER_QUERY = gql`
    //     {
    //     artworks {
    //         id
    //     }
    //     }
    //     `;

    //     try {
    //         console.log("HOLA2")
    //         const data = UseQuery(USER_QUERY);
    //         console.log("HOLA2", data)
    //         console.log(data);
    //         localStorage.setItem('token', data.token);
    //     } catch (error) {

    //     }
    // }

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
        // startLogin,
        startLogout,
        // startRegister,
    }

}