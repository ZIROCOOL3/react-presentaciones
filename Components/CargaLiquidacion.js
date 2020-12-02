import styles from '../styles/Home.module.css'
export default function CargaLiquidacion(props){
    const Ruta = props.ruta
    const Entidad = props.entidad

    return(
        <div>
            <p>
                01-Entramos al Programa de Respuestas eligiendo la sucursal correspondiente.<br/>
                02-luego elegimos el boton <strong>cargar liquidacion.</strong><br/>
            </p>
            <img src='/respuestas/RSE01.jpg'></img>
            <p>
                03-elegimos PERIODO, ENTIDAD y presionamos buscar.<br/>
                04-luego que se llena el datagrid presionamos el boton <strong>cargar liquidacion.</strong><br/>
            </p>
            <img src='/respuestas/CargarLiquidacion.jpg'></img>
            <p>
                05-luego presionamos el boton <strong>cargar respuesta.</strong><br/>
                06-elegir periodo de liquidación.<br/>
                07-presionamos el boton de {Entidad}.<br/>
                08-elegimos el archivo respuesta.<br/>
            </p>
            <img src={Ruta}></img>
            <p>
                09-luego elegimos los nombres para los arhivos de excel de La respuesta,telefonos,email<br/>
                -AUTOMATICAMENTE MANDA ESTOS ARCHIVOS AL AREA DE COBRANZA PARA SU AUTORIZACION.<br/>
            </p>
        </div>

    )
}