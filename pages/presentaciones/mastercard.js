import 'bulma/css/bulma.css'

export default function mastercard(){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">Presentaciones Mastercard</p>
                        <div className="content">
                        <p>
                            01-Hay que entrar a la pagina de <strong><a href ="https://www.firstdata.com.ar/index.html" target="_blank">MasterCard:</a></strong><br/>
                            02-Presionamos Autogestion.<br/>
                            03-Presionamos Debito automatico.<br/>
                            04-Presionamos Presentaciones.<br/>
                        </p>
                        <img src='/respuestas/RME01.jpg'></img>
                        <p>
                            05-Presionamos <strong>IMPORTAR ARCHIVO.</strong><br/>
                        </p>
                        <img src='/presentaciones/PM01.jpg'></img>
                        <p>
                            06-Luego pasamos examinar y elegimos el archivo y presionamos verificar.<br/>
                        </p>
                        <img src='/presentaciones/PM02.jpg'></img>
                        <p>
                            07-luego presionamos los 3 puntitos y elegimos enviar.<br/>
                        </p>


                    </div>
                </div>
                </article>
            </div>
        </div>
    )
}