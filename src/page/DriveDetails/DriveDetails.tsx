import * as S from "./driveDetails.Styled";
import Navigation from "@/components/Navigate/Navigate";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getIdDriver from "@/service/driverApi/getIdDriver";
import TableVehicle from "@/components/TableVehicle/TableVehicle";

const DriveDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { data: dataGetIdDriver, isLoading } = useQuery({
    queryKey: ["driver", id],
    queryFn: () => getIdDriver(+id!),
  });

  return (
    <S.Container>
      <Navigation />
      <S.DivProfile>
        <div>
          {isLoading ? (
            <span>Carregando...</span>
          ) : (
            <S.ImageProfile src={dataGetIdDriver?.avatar_url} alt="" />
          )}
        </div>
        <S.DivProfileInfo>
          {isLoading ? (
            <span>Carregando...</span>
          ) : (
            <h2>
              {dataGetIdDriver?.first_name} {dataGetIdDriver?.last_name}
            </h2>
          )}

          {isLoading ? (
            <span>Carregando...</span>
          ) : (
            <S.Span>
              company: <strong>{dataGetIdDriver?.company?.name}</strong>
            </S.Span>
          )}
        </S.DivProfileInfo>
      </S.DivProfile>
      <S.DivTable>
        <h3>
          Vehicle related to {dataGetIdDriver?.first_name}{" "}
          {dataGetIdDriver?.last_name}
        </h3>
        <TableVehicle data={dataGetIdDriver?.vehicles} isLoading={isLoading} />
      </S.DivTable>
    </S.Container>
  );
};

export default DriveDetails;
