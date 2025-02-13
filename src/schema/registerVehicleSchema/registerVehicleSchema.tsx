import * as yup from "yup";

export const registerVehicleSchema = yup.object().shape({
  plate: yup.string().required("Plate is required"),
  model: yup.string().required("Model is required"),
  type: yup.string().required("Type is required"),
  capacity: yup.string().required("Capacity is required"),
});
