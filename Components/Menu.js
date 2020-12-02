import 'bulma/css/bulma.css'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Menu(){
    return(
      
      <div className="box">
        <div className="menu">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="./">
                <img src="http://eme.com.ar/images/logo_head.png" width="48" height="48"/>
              </a>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className={styles.Menu}>
                  <Link className="navbar-item" href='/presentaciones'id="Presentacion">
                    <a>Presentaciones</a>
                  </Link>
                </div>
                <div className={styles.Menu}>
                  <Link className="navbar-item" href='/respuestas'>
                    <a>Respuestas</a>
                  </Link>
                </div>
              </div>
            </div>
            
          </nav>
        </div>
        </div>


    )
}