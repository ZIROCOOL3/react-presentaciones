import 'bulma/css/bulma.css'

export default function Cabal (){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <div className="content">
                    <p className="title">Presentacion Cabal</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://transmisiones.cabal.coop/webclient/Login.xhtml" target="_blank">Cabal:</a></strong><br/>
                        </p>
                        <img src='/presentaciones/PC01.jpg'></img>
                        <p>
                            02-Presionamos Subir.<br/>
                        </p>
                        <img src='/presentaciones/PC02.jpg'></img>
                        <p>
                            03-luego Elegimos upload.<br/>
                        </p>
                    </div>
                </div>
                </article>
            </div>
        </div>
    )
}