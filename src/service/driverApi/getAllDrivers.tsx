import { api } from "@/api/api";
import { IDriver } from "@/types/IDriverTypes/IDriverTypes";

const getAllDrivers = async (): Promise<IDriver[]> => {
  try {
    const response = await api.get("/drivers/");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getAllDrivers;
