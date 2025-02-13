import { api } from "@/api/api";
import { IVehicle } from "@/types/IVehicleTypes/IVehicleTypes";

const getAllVehicle = async (): Promise<IVehicle[]> => {
  try {
    const response = await api.get("/vehicles/");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getAllVehicle;
