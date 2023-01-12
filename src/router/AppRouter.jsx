import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LURoutes } from '../LienzoUrbano/routes/LURoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { Navegation, Chat, ProfilePage, AccountSettings, CreatePost, Search } from '../LienzoUrbano/pages';
import { gql, useSubscription } from '@apollo/client';
import { OpenPost } from 'LienzoUrbano/pages/OpenPost';

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  const [notificationsProcessed, setNotificationsProcessed] = useState([]);

  const currentUserId = localStorage.getItem('userId') || 0;

  useEffect(() => {
    checkAuthToken();
  }, [])

  const processNotification = (notification) => {
    if (notification && !notificationsProcessed.includes(notification.id)) {
      setNotificationsProcessed([...notificationsProcessed, notification.id])
      Swal.fire({
        title: notification.title, text: notification.content,
        toast: true,
        position: 'top-right',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });
    }
  }

  const GLOBAL_NOTIFICATIONS_SUBSCRIPTION = gql`
    subscription GlobalNotifications {
      globalNotifications {
        id
        userId
        typeId
        title
        content
        link
        createdDate
        viewed
      }
    }
  `;
  const GLOBAL_NOTIFICATIONS_DATA = useSubscription(
    GLOBAL_NOTIFICATIONS_SUBSCRIPTION
  );
  const newGlobalNotificationReceived = GLOBAL_NOTIFICATIONS_DATA?.data?.globalNotifications
  processNotification(newGlobalNotificationReceived)


  const USER_NOTIFICATIONS_SUBSCRIPTION = gql`
    subscription UserNotifications($userId: Int) {
      userNotifications(userId: $userId) {
        id
        userId
        typeId
        title
        content
        link
        createdDate
        viewed
      }
    }
  `;
  const USER_NOTIFICATIONS_DATA = useSubscription(
    USER_NOTIFICATIONS_SUBSCRIPTION,
    {
      variables: { userId: Number(currentUserId) }
    }
  );
  const newUserNotificationReceived = USER_NOTIFICATIONS_DATA?.data?.userNotifications
  console.log(USER_NOTIFICATIONS_DATA?.data);
  processNotification(newUserNotificationReceived)

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/*" element={<Navigate to="/auth/welcome" />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<Navegation />} />
              <Route path="/chat" element={ <Chat /> } />
              <Route path="/profile" element={ <ProfilePage /> } />
              <Route path="/accountSettings" element={ <AccountSettings /> } />
              <Route path="/createPost" element={ <CreatePost /> } />
              <Route path="/search" element={ <Search /> } />
              <Route path="/openPost" element={ <OpenPost /> } />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
