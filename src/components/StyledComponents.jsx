import styled from "styled-components";

// React界隈で人気の書き方
// コンポーネントとスタイルを分けれるので、見た目がスッキリしている
// dependency に styled-components を入れる
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!!</SButton>
    </SContainer>
  );
};

// 変数名をただの「Container」にしてしまうと、
// コンポーネントなのか、スタイルオブジェクトなのか見分けづらい
// 頭文字「S」をつけるなど、ローカルルールを決めること
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

// Sassと同じ記法が使える
// styled-componentsは移行にも便利
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
`;
