import ButtonProps from "@/components/ButtonProps/ButtonProps";
import Table from "@/components/Table/Table";
import * as S from "./Home.Styled";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigate/Navigate";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateVehicle = () => {
    navigate("/regiterVehicle");
  };

  return (
    <>
    <S.Container>
    <Navigation/>
      <S.DivButtonCreateVehicle>
        <h3>Gerencie seus veiculos</h3>
        <div>
          <ButtonProps name="Criar veiculo" onClick={handleCreateVehicle} />
        </div>
      </S.DivButtonCreateVehicle>
      <Table />
    </S.Container>
    </>
  );
};

export default Home;
