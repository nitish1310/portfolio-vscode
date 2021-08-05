import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://nitish-soman.netlify.app/" target="_blank" rel="noopener">
        nitish-soman.netlify.app
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:nitish.soman13@gmail.com"
          target="_blank"
          rel="noopener"
        >
          nitish.soman13@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/nitish1310" target="_blank" rel="noopener">
        nitish1310
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/nitishsoman13/"
          target="_blank"
          rel="noopener"
        >
          nitishsoman13
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/iamnitinr"
          target="_blank"
          rel="noopener"
        >
          iamnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/nitish.soman13"
          target="_blank"
          rel="noopener"
        >
          nitish.soman13
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;polywork:{' '}
        <a
          href="https://www.polywork.com/nitinranganath"
          target="_blank"
          rel="noopener"
        >
          nitinranganath
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/iamnitinr" target="_blank" rel="noopener">
          iamnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a href="https://codepen.io/Nitish13" target="_blank" rel="noopener">
        Nitish13
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/Nitish13"
          target="_blank"
          rel="noopener"
        >
          Nitish13
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
