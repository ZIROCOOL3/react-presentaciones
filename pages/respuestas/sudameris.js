import 'bulma/css/bulma.css'
import CargaLiquidacion from '../../Components/CargaLiquidacion'
import EnvioCorreoMsg from '../../Components/EnvioCorreoMsg'

export default function sudameris(){
    const RutaImagen="/respuestas/RSE02.jpg";
    const Entidad="SUDAMERIS";
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <div className="content">
                    <p className="title">Respuestas Sudameris</p>
                        
                        <div className="content">
                        <p>
                        - El Archivo Respuesta llega por Correo.<br/>
                        </p>
                        <CargaLiquidacion ruta={RutaImagen} entidad={Entidad} />
                        <EnvioCorreoMsg/>
                    </div>
                </div>
                </article>
            </div>

        </div>
    )

}