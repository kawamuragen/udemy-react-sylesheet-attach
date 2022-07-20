/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Emotion は複数の書き方ができる
// Css-modules、InlineStyle、Styled-Componentsの書き方ができる
// @emotion/react と @emotion/styled を dependency に入れる
// ２行目はお決まりの書き方、１行目はうまく動かないときに入れる

export const Emotion = () => {
  // CSSと同じ書き方
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // InlineStyleと同じ書き方
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

// styled-components と同じ書き方
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
