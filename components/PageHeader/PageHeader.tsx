import { FaLongArrowAltLeft } from "react-icons/fa";

import * as S from "./page-header.styles";

interface PageHeaderProps {
  title: string;
  comeBack?: {
    link: string;
    text: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, comeBack }) => {
  return (
    <S.Container>
      {comeBack ? (
        <S.ComeBackWrapper href={comeBack.link}>
          <FaLongArrowAltLeft />
          <S.ComeBackText>{comeBack.text}</S.ComeBackText>
        </S.ComeBackWrapper>
      ) : null}

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
