
import * as S from "./RegisterVehicle.Styled";

const RegiterVehicle = () => {
  return (
    <div>
      <S.DivBack>
        <S.BunttonBack to="/">Voltar</S.BunttonBack>
      </S.DivBack>
      <S.FormWrapper>
        <S.Form>
          <h2>Cadastro de Veículo</h2>

          <S.Label>Placa:</S.Label>
          <S.Input type="text" name="plate" required />

          <S.Label>Modelo:</S.Label>
          <S.Input type="text" name="model" required />

          <S.Label>Tipo:</S.Label>
          <S.Select name="type" required>
            <option value="">Selecione</option>
            <option value="truck">Caminhão</option>
            <option value="car">Carro</option>
            <option value="motorcycle">Moto</option>
          </S.Select>

          <S.Label>Capacidade:</S.Label>
          <S.Input type="text" name="capacity" required />

          <S.Button type="submit">Cadastrar Veículo</S.Button>
        </S.Form>
      </S.FormWrapper>
    </div>
  );
};

export default RegiterVehicle;
