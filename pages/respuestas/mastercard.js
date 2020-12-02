import 'bulma/css/bulma.css'

export default function mastercard(){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">Respuesta Mastercard</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://www.firstdata.com.ar/index.html" target="_blank">MasterCard:</a></strong><br/>
                            02-Presionamos Autogestion.<br/>
                            03-Presionamos Debito automatico.<br/>
                            04-Presionamos Presentaciones.<br/>
                        </p>
                        <img src='/respuestas/RME01.jpg'></img>
                        <p>
                            05-luego Elegimos los tres puntos y elegimos la opcion <strong>Descargar Proc CSV(DA130D).</strong><br/>
                        </p>
                        <img src='/respuestas/RME02.jpg'></img>
                        <p>
                            06-Luego pasamos el archivo Csv a excel.<br/>
                        </p>
                        <p>
                            07-Entramos al Programa de Respuestas eligiendo la sucursal correspondiente.<br/>
                            08-luego elegimos el boton <strong>cargar liquidacion.</strong><br/>
                        </p>
                        <p>
                            09-elegimos PERIODO, ENTIDAD y presionamos buscar.<br/>
                            10-luego que se llena el datagrid presionamos el boton <strong>cargar liquidacion.</strong><br/>
                        </p>
                        <img src='/respuestas/CargarLiquidacion.jpg'></img>
                        <p>
                           11-luego presionamos el boton <strong>cargar respuesta.</strong><br/>
                           12-elegir periodo de liquidación.<br/>
                           13-presionamos el boton de Mastercard.<br/>
                           14-elegimos el archivo respuesta.<br/>
                        </p>
                        <img src='/respuestas/RME03.jpg'></img>
                        <p>
                           15-luego elegimos los nombres para los arhivos de excel de La respuesta,telefonos,email<br/>
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