import * as S from "./Drivers.Styled";
import Navigation from "@/components/Navigate/Navigate";
import TableDriver from "@/components/TableDriver/TableDriver";

const Drivers = () => {
  return (
    <S.Container>
      <Navigation />
      <TableDriver />
    </S.Container>
  );
};

export default Drivers;


