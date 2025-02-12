import Table from "@/components/Table/Table";
import * as S from "./DriveDetails.Styled";
import Navigation from "@/components/Navigate/Navigate";

const DriveDetails = () => {
  // const { id } = useParams<{ id: string }>();

  return (
    <S.Container>
      <Navigation />
      <S.DivProfile>
        <div>
          <S.ImageProfile src="https://fakeimg.pl/200x200?font=museo" alt="" />
        </div>
        <S.DivProfileInfo>
          <h2>Alex santos</h2>
          <S.Span>Company ABC</S.Span>
        </S.DivProfileInfo>
      </S.DivProfile>
      <div>
      <h3>Veículos relacionados a Alex Santos</h3>
        <Table />
      </div>
    </S.Container>
  );
};

export default DriveDetails;
