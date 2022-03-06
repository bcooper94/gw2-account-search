import styles from "./home-background.module.css";

const HomeBackground: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default HomeBackground;
