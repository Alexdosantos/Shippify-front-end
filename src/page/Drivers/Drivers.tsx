import * as S from "./drivers.Styled";
import Navigation from "@/components/Navigate/Navigate";
import TableDriver from "@/components/TableDriver/TableDriver";
import getAllDrivers from "@/service/driverApi/getAllDrivers";
import { useQuery } from "@tanstack/react-query";

const Drivers = () => {
  const { data: dataDrivers, isLoading } = useQuery({
    queryKey: ["getAllDrivers"],
    queryFn: getAllDrivers,
  });

  return (
    <S.Container>
      <Navigation />
      <TableDriver data={dataDrivers} isLoading={isLoading} />
    </S.Container>
  );
};

export default Drivers;
