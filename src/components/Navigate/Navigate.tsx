import * as S from "./Navigate.Styled";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const pathName = useLocation();
  return (
    <S.NavigationStyled>
      <S.LinkStyled
        to="/"
        $customBackground={pathName.pathname === "/" ? "#fc762e" : ""}
        $customColor={pathName.pathname === "/" ? "#fff" : ""}
      >
        Home
      </S.LinkStyled>
      <S.LinkStyled
        to="/drives"
        $customBackground={pathName.pathname === "/drives" ? "#fc762e" : ""}
        $customColor={pathName.pathname === "/drives" ? "#fff" : ""}
      >
        Drivers
      </S.LinkStyled>
    </S.NavigationStyled>
  );
};
export default Navigation;
