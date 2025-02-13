import { api } from "@/api/api";

export interface ICreateVehicle {
  plate: string;
  model: string;
  type: string;
  capacity: string;
}

const createVehicle = async (data: ICreateVehicle) => {
  try {
    const response = await api.post("/vehicles/create", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default createVehicle;
