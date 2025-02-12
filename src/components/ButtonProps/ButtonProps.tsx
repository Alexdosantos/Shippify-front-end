import * as S from "./ButtonProps.Styled";

export interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const ButtonProps = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <S.ButtonProps onClick={onClick}>{name}</S.ButtonProps>
    </>
  );
};

export default ButtonProps;
