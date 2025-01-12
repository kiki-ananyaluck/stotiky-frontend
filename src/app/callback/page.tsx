"use client"
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Callback = () => {
    const router = useRouter();
    const search = useSearchParams();

    useEffect(() => {
        const code = search.get('code');

        if (code) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/callback?code=${code}`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                    localStorage.setItem('user_id', data.user_id);

                    router.push('/home');
                })
                .catch(error => {
                    console.error('Error fetching access token:', error);
                });
        }
    }, [router]);

    return (
        <div>Loading...</div>
    );
};

export default Callback;
