import * as S from "./Home.Styled";
import ButtonProps from "@/components/ButtonProps/ButtonProps";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigate/Navigate";
import { useQuery } from "@tanstack/react-query";
import getAllVehicle from "@/service/vehicleApi/getAllVehicle";
import TableVehicle from "@/components/TableVehicle/TableVehicle";

const Home = () => {
  const navigate = useNavigate();

  const { data: dataGetAllVehicle, isLoading } = useQuery({
    queryKey: ["vehicle"],
    queryFn: getAllVehicle,
  });

  const handleCreateVehicle = () => {
    navigate("/regiterVehicle");
  };

  return (
    <>
      <S.Container>
        <Navigation />
        <S.DivButtonCreateVehicle>
          <h3>Vehicle list</h3>
          <div>
            <ButtonProps name="Create vehicle" onClick={handleCreateVehicle} />
          </div>
        </S.DivButtonCreateVehicle>
        <TableVehicle data={dataGetAllVehicle} isLoading={isLoading} />
      </S.Container>
    </>
  );
};

export default Home;
