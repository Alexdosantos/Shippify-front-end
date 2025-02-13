import * as S from "./registerVehicle.Styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerVehicleSchema } from "@/schema/registerVehicleSchema/registerVehicleSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import createVehicle, {
  ICreateVehicle,
} from "@/service/vehicleApi/createVehicle";
import { useNavigate } from "react-router-dom";

const RegiterVehicle = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerVehicleSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: ICreateVehicle) => createVehicle(data),
    onSuccess: () => {
      alert(" ✅ Veículo cadastrado com sucesso!");
      reset();
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["getAllVehicles"] });
    },
    onError: (error) => {
      console.log(error);
      alert(" ❌ Erro ao cadastrar veículo!");
    },
  });

  const onSubmit = (data: ICreateVehicle) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <S.DivBack>
        <S.BunttonBack to="/"> ◀ Back</S.BunttonBack>
      </S.DivBack>
      <S.FormWrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Vehicle registration</h2>

          <span>{errors.plate?.message}</span>
          <S.Label>Plate:</S.Label>
          <S.Input type="text" required {...register("plate")} />

          <span>{errors.model?.message}</span>
          <S.Label>Model:</S.Label>
          <S.Input type="text" required {...register("model")} />

          <span>{errors.type?.message}</span>
          <S.Label>Type:</S.Label>
          <S.Select required {...register("type")}>
            <option value="">Select</option>
            <option value="truck">Truck</option>
            <option value="car">Car</option>
            <option value="motorcycle">Van</option>
            <option value="mini-truck">Mini-truck</option>
          </S.Select>

          <span>{errors.capacity?.message}</span>
          <S.Label>Capacity:</S.Label>
          <S.Input type="text" required {...register("capacity")} />

          <S.Button type="submit">Register Vehicle</S.Button>
        </S.Form>
      </S.FormWrapper>
    </div>
  );
};

export default RegiterVehicle;
