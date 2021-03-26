import 'bulma/css/bulma.css'

export default function Amex (){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                    <div className="content">
                        <p className="title">Presentacion America Express</p>
                        <div className="content">
                            <p>
                                01-Liquidar amex <br/>
                                02-Entrar a la pagina de <strong><a href ="https://fsgateway.aexp.com/ftp-web/app" target="_blank">Amex:</a></strong><br/>
                            </p>
                            <img src='/presentaciones/PA01.jpg'></img>
                            <p>
                                02-Selecionamos el archivo y presionamos Subir.<br/>
                            </p>
                        </div>    
                    </div>
                </article>
            </div>

        </div>
    )
}
