import { ICompany } from "../ICompanyTypes/ICompanyTypes";
import { IVehicle } from "../IVehicleTypes/IVehicleTypes";

export interface IDriverData {
  data: IDriver[] | undefined;
  isLoading?: boolean;
}

export interface IDriver {
  id: number;
  company_id: number;
  city_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar_url: string;
  status: string;
  created_at: string;
  vehicles: IVehicle[] | undefined;
  company: ICompany | undefined;
}
