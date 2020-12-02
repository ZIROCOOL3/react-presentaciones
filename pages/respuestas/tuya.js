import 'bulma/css/bulma.css'

export default function Tuya (){
    return(
        <div>
             <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                <div className="content">
                    <p className="title">Respuesta Tarjeta Tuya</p>
                        <div className="content">
                        <p>
                            01-Pasamo a excel el pdf enviado desde cobranza.<br/>
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
                           07-presionamos el boton de tuya.<br/>
                           08-elegimos el archivo respuesta.<strong>(respuesta.xlsx)</strong>
                        </p>
                        <img src='/respuestas/RTE01.jpg'></img>
                        <p>
                           09-luego elegimos los nombres para los arhivos de excel de La respuesta,telefonos,email<br/>
                           -AUTOMATICAMENTE MANDA ESTOS ARCHIVOS AL AREA DE COBRANZA PARA SU AUTORIZACION.<br/>
                        </p>
                        <p>
                           <strong>-Envio de Correos</strong> <br/>
                           01-presionamos el boton cargar respuestas.<br/>
                           02-luego presionamos el boton con el dibujo de excel.<br/>
                        </p>
                        <img src='/respuestas/RSE03.jpg'></img>
                        <p>
                           03-elegimos el nombre de la hoja de excel.<br/>
                           04-Presionamos <strong>Levantar Excel</strong>.<br/>
                           05-una vez que se rellene el datagrid se presiona el boton Procesar
                        </p>
                        <img src='/respuestas/RSE04.jpg'></img>
                        <p>
                           <strong>-Envio de Mensajes de Texto</strong> <br/>
                           01- Hay que subri a la pagina de Dropbox los dos csv generados
                           anteriormente<strong>(deben tener solo el nombre de nombres.csv y telefono.csv)</strong>.<br/>
                           <strong><a href ="https://www.dropbox.com/home/Aplicaciones/LEER" target="_blank">DropBox</a></strong><br/>
                           02-luego presionamos el boton con el dibujo de excel.<br/>
                        </p>

                    </div>
                </div>
                </article>
            </div>

        </div>
    )
}
