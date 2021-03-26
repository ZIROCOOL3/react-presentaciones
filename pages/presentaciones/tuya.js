import 'bulma/css/bulma.css'

export default function Tuya (){
    return(
        <div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                    <div className="content">
                        <p className="title">Presentacion Tarjeta Tuya</p>
                        <div className="content">
                                <p>
                                    01-Liquidar tuya <br/>
                                    02-Se envia el archivo a las siguientes direcciones:.<br/>
                                    silvia.cantero@nbch.com.ar,magali.berman@nbch.com.ar,bettina.genovese@nbch.com.ar,
                                    manuel.brizuela@nbch.com.ar<br/>
                                    Asunto: D.A.TUYA<br/>
                                    03-En el cuerpo poner lo siguiente:<br/>
                                    Comercio: 3110170060585<br/>
                                    Cant.Reg: ___<br/>
                                    Total: $ ____________<br/>
                                </p>
                        </div>    

                        
                    </div>
                </article>
            </div>

        </div>
    )
}
