import styles from '../styles/Home.module.css'
export default function Pie(){
    return(
        <footer className={styles.footer}>
        <a
          href="http://javiercanteros.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

    )
}