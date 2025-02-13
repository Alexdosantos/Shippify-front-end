export interface IVehicleData {
  data: IVehicle[] | undefined;
  isLoading?: boolean;
}

export interface IVehicle {
  id: number;
  driver_id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
}
