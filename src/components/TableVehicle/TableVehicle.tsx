import * as S from "./TableVehicle.Styled";
import { IVehicleData } from "@/types/IVehicleTypes/IVehicleTypes";

const TableVehicle = ({ data, isLoading }: IVehicleData) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <tr>
            <S.Th>ID</S.Th>
            <S.Th>Driver ID</S.Th>
            <S.Th>Plate</S.Th>
            <S.Th>Model</S.Th>
            <S.Th>Type</S.Th>
            <S.Th>Capacity</S.Th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <S.Td colSpan={6}>Carregando...</S.Td>
            </tr>
          ) : (
            <>
              {data?.map((vehicle) => (
                <tr key={vehicle?.id}>
                  <S.Td>{vehicle?.id}</S.Td>
                  <S.Td>{vehicle?.driver_id}</S.Td>
                  <S.Td>{vehicle?.plate}</S.Td>
                  <S.Td>{vehicle?.model}</S.Td>
                  <S.Td>{vehicle?.type}</S.Td>
                  <S.Td>{vehicle?.capacity}</S.Td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default TableVehicle;
