export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    // 余白をもって等間隔に配置
    justifyContent: "space-around",
    // すべての直接の子要素に集合として align-self の値を設定
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inlie Style -</p>
      <button style={buttonStyle}>FiGHT!!!</button>
    </div>
  );
};
