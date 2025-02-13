import * as S from "./TableDriver.Styled";
import ButtonProps from "../ButtonProps/ButtonProps";
import { useNavigate } from "react-router-dom";
import { IDriverData } from "@/types/IDriverTypes/IDriverTypes";

const TableDriver = ({ data, isLoading }: IDriverData) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: number) => {
    navigate(`/drive/${id}`);
  };

  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <tr>
            <S.Th>ID</S.Th>
            <S.Th>Avatar</S.Th>
            <S.Th>First Name</S.Th>
            <S.Th>Last Name</S.Th>
            <S.Th>Company ID</S.Th>
            <S.Th>City ID</S.Th>
            <S.Th>Email</S.Th>
            <S.Th>Phone</S.Th>
            <S.Th>Status</S.Th>
            <S.Th>Created At</S.Th>
            <S.Th>Details</S.Th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <S.Td colSpan={6}>Carregando...</S.Td>
            </tr>
          ) : (
            <>
              {data?.map((driver) => (
                <tr key={driver?.id}>
                  <S.Td>{driver?.id}</S.Td>
                  <S.Td>
                    <img src={driver?.avatar_url} alt="Avatar" />
                  </S.Td>
                  <S.Td>{driver?.first_name}</S.Td>
                  <S.Td>{driver?.last_name}</S.Td>
                  <S.Td>{driver?.company_id}</S.Td>
                  <S.Td>{driver?.city_id}</S.Td>
                  <S.Td>{driver?.email}</S.Td>
                  <S.Td>{driver?.phone}</S.Td>
                  <S.Td>{driver?.status}</S.Td>
                  <S.Td>{driver?.created_at}</S.Td>
                  <S.Td>
                    <ButtonProps
                      name="Details"
                      onClick={() => handleDetailsClick(driver?.id)}
                    />
                  </S.Td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default TableDriver;
