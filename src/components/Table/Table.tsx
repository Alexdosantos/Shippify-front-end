import React from "react";
import * as S from "./Table.Styled";

const vehicleData = [
  {
    id: 1,
    driver_id: 1,
    plate: "ABC-123",
    model: "Toyota Hilux",
    type: "truck",
    capacity: "1000kg",
  },
  {
    id: 2,
    driver_id: 2,
    plate: "DEF-456",
    model: "Ford Ranger",
    type: "truck",
    capacity: "1200kg",
  },
  {
    id: 3,
    driver_id: 3,
    plate: "GHI-789",
    model: "Chevrolet S10",
    type: "truck",
    capacity: "900kg",
  },
];

const Table: React.FC = () => {
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
          {vehicleData.map((vehicle) => (
            <tr key={vehicle.id}>
              <S.Td>{vehicle.id}</S.Td>
              <S.Td>{vehicle.driver_id}</S.Td>
              <S.Td>{vehicle.plate}</S.Td>
              <S.Td>{vehicle.model}</S.Td>
              <S.Td>{vehicle.type}</S.Td>
              <S.Td>{vehicle.capacity}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default Table;
