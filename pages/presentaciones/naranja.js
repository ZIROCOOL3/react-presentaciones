import 'bulma/css/bulma.css'

export default function naranja(){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <div className="content">
                    <p className="title">Respuesta Naranja</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://secure.tarjetanaranja.com.ar/sta/cgi-bin/sta.cgi?Session-task=10" target="_blank">Naranja:</a></strong><br/>
                             <strong>¡¡¡ PROBAR UNA SOLA VEZ, SI NO SE LOGUEA ENTRAR A LA PAGINA EN MODO INCOGNITO!!!</strong>
                            
                        </p>
                        <img src='/presentaciones/PN01.jpg'></img>
                        <p>
                            02-Presionamos bandeja de salida.<br/>
                         </p>
                        <img src='/presentaciones/PN02.jpg'></img>
                        <p>
                            09-elegimos ARCHIVO, CANTIDAD DE CLIENTES, IMPORTE Y NUMERO DE COMERCIO, EL CUAL ES : <strong>115004189</strong><br/>
                            10-PRESIONAMOS ENVIAR.
                        </p>
                    </div>
                </div>
                </article>
            </div>
        </div>
    )
}