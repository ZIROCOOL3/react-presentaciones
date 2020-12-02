import styles from '../styles/Home.module.css'
import Link from 'next/link'
import 'bulma/css/bulma.css'
import Menu from '../components/Menu'
export default function Presentaciones(){
    
    return(
        
        <div>
          <Menu/>
          <div class="buttons">
          <div className="box">
              <button className="button is-primary">
                <img src="/bna.ico"  className={styles.icon} />
                Banco Nacion
              </button>

              <button className="button is-link">
              <img src="/bancoChaco.ico"  className={styles.icon} />
                Banco del chaco
              </button>
              
              <Link href='../presentaciones/sudameris'>
                <button className="button is-info">
                <img src="/sudameris.ico" className={styles.icon} />
                  Sudameris
                </button>
              </Link>

              <Link href='../respuestas/tuya'>
                <button className="button is-success">
                <img src="/ecom.ico" className={styles.icon} />
                Ecom
                </button>
              </Link>
            </div><br/>
            <div className="box">
              <Link href='../respuestas/tuya'>
                <button className="button is-primary">
                <img src="/tuya.ico" className={styles.icon} />
                  Tuya
                </button>
              </Link>

              <Link href='../respuestas/visa'>
                <button className="button is-warning">
                <img src="/visa.ico" className={styles.icon} />
                Visa
                </button>
              </Link>

              <Link href='../respuestas/cabal'>
                <button className="button is-info">
                <img src="/cabal.ico" className={styles.icon} />
                  Cabal
                </button>
              </Link>

              <Link href='../respuestas/mastercard'>
                <button className="button is-success">
                <img src="/mastercard.ico" className={styles.icon} />
                  Mastercard
                </button>
              </Link>

              <Link href='../respuestas/amex'>
                <button className="button is-primary">
                <img src="/amex.ico" className={styles.icon} />
                  American Express
                </button>
              </Link>
              <Link href='../respuestas/naranja'>
                <button className="button is-link">
                <img src="/naranja.ico" className={styles.icon} />
                  Naranaja
                </button>
              </Link>
            </div><br/>
          </div>
        </div>
    )
}