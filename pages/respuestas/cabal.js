import 'bulma/css/bulma.css'
import CargaLiquidacion from '../../Components/CargaLiquidacion'
import EnvioCorreoMsg from '../../Components/EnvioCorreoMsg'

export default function Cabal (){
    const RutaImagen="/respuestas/RCE04.jpg";
    const Entidad="CABAL";
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <div className="content">
                    <p className="title">Respuestas Cabal</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://transmisiones.cabal.coop/webclient/Login.xhtml" target="_blank">Cabal:</a></strong><br/>
                            02-Presionamos Bajar.<br/>
                        </p>
                        <img src='/respuestas/RCE01.jpg'></img>
                        <p>
                            03-luego Elegimos el mes Correspondiente.<br/>
                        </p>
                        <img src='/respuestas/RCE02.jpg'></img>
                        <p>
                            04-Bajamos el Archivo Respuesta.<br/>
                        </p>
                        <img src='/respuestas/RCE03.jpg'></img>
 
                        <CargaLiquidacion props={RutaImagen} props2={Entidad}/>
                        <EnvioCorreoMsg/>

                    </div>
                </div>
                </article>
            </div>

  
        </div>
    )
}