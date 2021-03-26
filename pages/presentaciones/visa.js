import 'bulma/css/bulma.css'

export default function Visa (){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-warning">
                    <div className="content">
                        <p className="title">Presentacion Visa</p>
                        <div className="content">
                            <p>
                                01-Hay que entrar a la pagina de <strong><a href ="https://prismanet.prismamediosdepago.com/extranet/login" target="_blank">Visa:</a></strong><br/>
                                02-Presionamos en Presentaciones.<br/>
                            </p>
                            <img src='/presentaciones/PV01.jpg'></img>
                            <p>
                                05-presionamos Browse y elegimos el archivo respuesta.<br/>
                                06-luego completamos cantidad de registro e importe para lo cual podemos usar el programa <strong>MONTOS LIQUIDADOS</strong><br/>
                            </p>
                            <img src='/presentaciones/PV02.jpg'></img>
                         </div>
                    </div>
                </article>
            </div>
        </div>
    )
}