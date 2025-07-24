import "../styles/About.css"
import Button from 'react-bootstrap/Button';


function About() {
    return (
        <>
            <>
                <h1 className="aboutTitulo">Sobre nuestra empresa</h1>
                <p className="aboutParrafo">Somos una empresa fundada en la ciudad de Buenos Aires, Capital Federal en el año 2012.
                    Nuestro objetivo primordial fue brindar una nueva experiencia de compra basada en el asesoramiento personalizado.Nuestro sucursal física está ubicada en el barrio de Belgrano, en la calle José Hernández 2525, habiendo extendido nuestra infraestructura inicial a un deposito en la misma localidad.
                    Con el tiempo fuimos generando alianzas estratégicas con importantes referentes del medio, que nos permitieron lograr un posicionamiento en redes que al día de hoy sigue siendo uno de nuestros pilares y cuyo alcance nos permitió generar un crecimiento exponencial para trabajar con variedad de marcas.
                    Tu confianza en nosotros está protegida por nuestra forma de entender el valor de tu compra.</p>
            </>
            <form className="contactoForm" action="https://formspree.io/f/myzykkra" method="POST" target="_blank">
                <fieldset>
                    <legend className="tituloForm">Contactanos:</legend>
                    <div style={{ width: "100%" }}>
                        <label htmlFor="nombre">Nombre: </label>
                        <input className="inputForm" type="text" size="15" name="Nombre" id="nombre" placeholder="Ingrese su nombre..." required />
                        <label htmlFor="apellido">Apellido: </label>
                        <input className="inputForm" size="20" placeholder="Ingrese su apellido..." type="text" name="Apellido" id="apellido"
                            required />
                    </div>
                    <label htmlFor="correo">e-Mail: </label>
                    <input className="inputForm" size="30" placeholder="Ingrese su correo..." type="Email" name="e-Mail" id="correo" required />
                    <label htmlFor="telefono">Teléfono:</label>
                    <input className="inputForm" size="10" placeholder="Ingrese su telefono..." type="tel" name="Telefono" id="telefono" /><br />
                    <label htmlFor="mensaje" style={{ width: "50%" }}>Dejá tu mensaje:</label><br />
                    <textarea className="inputTextArea" name="Mensaje" rows="10" cols="45" id="mensaje" placeholder="Escriba su mensaje..."
                        required></textarea><br />
                    <div style={{ margin: "2% 0", textAlign: "center" }}>
                        <Button variant="outline-success" type="submit" value="Enviar" style={{ margin: "0 4px", width: "clamp(5em, 10vw, 12.5em)", fontSize: "clamp(0.8em, 1.8vw, 2.5em)" }}>Enviar</Button>
                        <Button variant="outline-success" type="reset" style={{ margin: "0 4px", width: "clamp(5em, 10vw, 12.5em)", fontSize: "clamp(0.8em, 1.8vw, 2.5em)" }}>Borrar</Button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default About