import { api } from "@/api/api";
import { IDriver } from "@/types/IDriverTypes/IDriverTypes";

const getIdDriver = async (id: number): Promise<IDriver> => {
  try {
    const response = await api.get(`/drivers/driver/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getIdDriver;
