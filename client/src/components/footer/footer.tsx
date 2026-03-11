import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.column}>
          <h3>ROAST</h3>
          <p>
            Quality beans, expertly roasted. Your daily coffee ritual starts
            here.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <p>hello@roastcoffee.com</p>
          <p>Calle 10, El Poblado</p>
        </div>

        <div className={styles.column}>
          <h4>Let's Connect</h4>
          <div className={styles.socials}>
            <a
              href="https://github.com/miguellozano03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lozano-miguel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:miguel.lozano.vergara@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.subFooter}>
        <p>© {new Date().getFullYear()} ROAST COFFEE CO.</p>
        <p>
          This is a portfolio project, not a real website. Any resemblance to
          reality is purely coincidental.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
