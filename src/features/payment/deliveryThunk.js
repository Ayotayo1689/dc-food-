import axiosInstance from "@/utils/axios";
import endpoints from "@/features/api/endpoints";


export const getDeliveryAreaThunk = async (name, thunkAPI) => {
    try {
        const resp = await axiosInstance.get(endpoints.getDeliveryArea);
        return resp.data.sort((a, b) => a.delivery_area.localeCompare(b.delivery_area));
    } catch (error) {
        return null;
    }
}

export const getDeliveryFeeThunk = async (id, thunkAPI) => {
    try {
        const resp = await axiosInstance.get(endpoints.getDeliveryAxisById(id));
        return parseInt(resp.data.delivery_price);
    } catch (error) {
        return null;
    }
}