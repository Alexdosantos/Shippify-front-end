import React from "react";
import * as S from "./TableDriver.Styled";
import ButtonProps from "../ButtonProps/ButtonProps";
import { useNavigate } from "react-router-dom";

const driversData = [
  {
    id: 1,
    company_id: 1,
    city_id: 101,
    first_name: "Juan",
    last_name: "Pérez",
    email: "juan.perez@example.com",
    phone: "555-1001",
    avatar_url: "https://example.com/avatar1.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 2,
    company_id: 1,
    city_id: 101,
    first_name: "Carlos",
    last_name: "Gómez",
    email: "carlos.gomez@example.com",
    phone: "555-1002",
    avatar_url: "https://example.com/avatar2.jpg",
    status: "inactive",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 3,
    company_id: 2,
    city_id: 102,
    first_name: "María",
    last_name: "Rodríguez",
    email: "maria.rodriguez@example.com",
    phone: "555-1003",
    avatar_url: "https://example.com/avatar3.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 4,
    company_id: 2,
    city_id: 102,
    first_name: "Luis",
    last_name: "Fernández",
    email: "luis.fernandez@example.com",
    phone: "555-1004",
    avatar_url: "https://example.com/avatar4.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 5,
    company_id: 3,
    city_id: 103,
    first_name: "Ana",
    last_name: "Martínez",
    email: "ana.martinez@example.com",
    phone: "555-1005",
    avatar_url: "https://example.com/avatar5.jpg",
    status: "inactive",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 6,
    company_id: 3,
    city_id: 103,
    first_name: "Pedro",
    last_name: "Torres",
    email: "pedro.torres@example.com",
    phone: "555-1006",
    avatar_url: "https://example.com/avatar6.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 7,
    company_id: 4,
    city_id: 104,
    first_name: "Sofía",
    last_name: "Díaz",
    email: "sofia.diaz@example.com",
    phone: "555-1007",
    avatar_url: "https://example.com/avatar7.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 8,
    company_id: 4,
    city_id: 104,
    first_name: "Miguel",
    last_name: "Ramírez",
    email: "miguel.ramirez@example.com",
    phone: "555-1008",
    avatar_url: "https://example.com/avatar8.jpg",
    status: "inactive",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 9,
    company_id: 5,
    city_id: 105,
    first_name: "Laura",
    last_name: "García",
    email: "laura.garcia@example.com",
    phone: "555-1009",
    avatar_url: "https://example.com/avatar9.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
  {
    id: 10,
    company_id: 5,
    city_id: 105,
    first_name: "Diego",
    last_name: "López",
    email: "diego.lopez@example.com",
    phone: "555-1010",
    avatar_url: "https://example.com/avatar10.jpg",
    status: "active",
    created_at: "2025-02-07T15:15:35.000Z",
  },
];
const Table: React.FC = () => {
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
          {driversData?.map((driver) => (
            <tr key={driver.id}>
              <S.Td>{driver.id}</S.Td>
              <S.Td>
                <img src={driver.avatar_url} alt="Avatar" />
              </S.Td>
              <S.Td>{driver.first_name}</S.Td>
              <S.Td>{driver.last_name}</S.Td>
              <S.Td>{driver.company_id}</S.Td>
              <S.Td>{driver.city_id}</S.Td>
              <S.Td>{driver.email}</S.Td>
              <S.Td>{driver.phone}</S.Td>
              <S.Td>{driver.status}</S.Td>
              <S.Td>{driver.created_at}</S.Td>
              <S.Td>
                <ButtonProps name="Details" onClick={() => handleDetailsClick(driver.id)} />
              </S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default Table;
