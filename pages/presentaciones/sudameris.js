import 'bulma/css/bulma.css'

export default function Sudameris (){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">Presntacion Sudameris</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://ebankempresas.bancopatagonia.com.ar/desktop-webserver/sso" target="_blank">Patagonia:</a></strong><br/>
                            02-Presionamos en cobro.<br/>
                            03-Presionamos en envio de archivos.<br/>
                        </p>
                        <img src='/presentaciones/PP01.jpg'></img>
                        <p>
                            04-Elegimos dibito directo.<br/>
                            05-Presionamos en Seleccionar Archivo.<br/>
                            06-Luego en enviar.<br/>
                        </p>
                        <img src='/presentaciones/PP02.jpg'></img>
                        <p>
                            07-Luego presionamos el boton confirmar.<br/>
                        </p>
                        <img src='/presentaciones/PP03.jpg'></img>
                        <p>
                            08-presionamos en cobros.<br/>
                            09-consultas de envios<br/>
                        </p>
                        <img src='/presentaciones/PP04.jpg'></img>
                        <p>
                            10-presionamos en el boton correspondiente en detalles.<br/>
                        </p>
                        <img src='/presentaciones/PP05.jpg'></img>
                        <p>
                            11-presionamos en la solapa Detalles y errores de envio, en los cuales debe figurar que no hay errores.<br/>
                        </p>
                        <img src='/presentaciones/PP06.jpg'></img>
                    </div>
                </div>
                </article>
            </div>

  
        </div>
    )
}