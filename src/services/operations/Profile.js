import { apiConnector } from "../apiConnector";
import { profile } from "../apis";

const {GET_PROFILE_DETAILS_API} = profile;

export const getProfile = async(loading) => {
    let result = null
    try {
        loading(true)
        const response = await apiConnector("GET",GET_PROFILE_DETAILS_API);
        if(!response.data.success){
            throw new Error(response.data.message);
        }
        loading(false)
        console.log("response", response)
        result = response?.data?.user
        console.log("result", result)
        return result;
    } catch (error) {
        if(error?.response) {
            console.log("Error in profile", error?.response)
        }
        console.log("GET PROFILE DETAILS API ERROR............", error)
        
    }
}

