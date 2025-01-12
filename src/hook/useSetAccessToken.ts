'use client'
import { useState, useEffect } from 'react';

export function useSetAccessToken() {
  const [accessToken, setAccessToken] = useState<string>('');
  const [userID, setUserID] = useState<string>('');

  useEffect(() => {
    const roleIdFromLocalStorage = localStorage.getItem('access_token');
    if (roleIdFromLocalStorage) {
      setAccessToken(roleIdFromLocalStorage);
    }

    const userIDFromLocalStorage = localStorage.getItem('user_id');
    if (userIDFromLocalStorage) {
      setUserID(userIDFromLocalStorage);
    }

  }, []);


  return { accessToken, userID,setAccessToken, setUserID };
}
