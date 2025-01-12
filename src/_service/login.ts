import axios from 'axios'

export const login = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/login`);
        if (response.status === 200) {
            return response;
        } else {
            console.error(`login response status: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error("Error inlogin:", error);
        return null;
    }
};

export const getUserProfile = async (accessToken:string, user_id: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/login/profile?user_id=${user_id}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        if (response.status === 200) {
            return response;
        } else {
            console.error(`getUserProfile response status: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error("Error in getUserProfile:", error);
        return null;
    }
};