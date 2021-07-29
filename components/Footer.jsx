import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.FooterContent}>
      <h1>
        All data used in this App is from Marvel API
      </h1>
      <br />
      <a target="_blank" href="https://diveshkswn.github.io/portfolio_/" rel="noreferrer"> Divesh Keswani</a>
    </div>

  );
}
