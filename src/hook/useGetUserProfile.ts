'use client'
import { getUserProfile } from '@/_service/login';
import { useState, useEffect } from 'react';

interface getRequestDataProps {
  accessToken: string;
  userID: string;
}


export function useGetUserProfile({
  accessToken,
  userID
}: getRequestDataProps) {
  const [profile, setProfile] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        console.log("doing")
        try {
          const response = await getUserProfile(accessToken, userID);
          console.log("response", response);
          if (response?.status === 200) {
            const data = response;
            setProfile(data || []);
          }
        } catch (error) {
          console.log("Error from searchRequest()", error);
          setProfile([]);
        }
      }
    };

    fetchData();
  }, [accessToken, userID]);


  return { profile, setProfile };
}
