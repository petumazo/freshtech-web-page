import styles from './BackgroundImage.module.css';

const Background = () => (
  <div className={styles.container}>
    <div className={styles.mainImgHome}>
      <div className={styles.textcontainer}>
        <p className={styles.titleb}>FRESHTECH</p>
        <p className={styles.titlea}>Somos especialistas en:</p>
        <p className={styles.titleb}>Diseño, Instalación y Mantenimiento</p>
        <p className={styles.titlea}>de sistemas de Aire Acondicionado y Eléctricos.</p>
      </div>
    </div>
  </div>
);

export default Background;
