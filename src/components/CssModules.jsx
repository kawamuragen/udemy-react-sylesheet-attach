import classes from "./CssModules.module.scss";

// JSXとCSSファイルを分けて記載できるので、関心の分離ができる
// Sassも使えるので、プロジェクトの移行時にスタイルシートをそのまま使える
// node-sass を dependency に入れる
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
