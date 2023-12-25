import React from 'react';

import { FlechaArriba } from "../../components/componentFlechaArriba/FlechaArriba";
import "./politicaPrivacidad.css"


const PoliticaPrivacidad = () => {
    return (
        <div className="politica-privacidad">
            <h1>Política de Privacidad de Tattoozaiko</h1>
            <p><strong>1. Información que Recopilamos</strong></p>
            <p>En Tattoozaiko, recopilamos la siguiente información:</p>
            <ul>
                <li>Información de contacto, como nombres, direcciones de correo electrónico y números de teléfono.</li>
                <li>Información demográfica, como ubicación geográfica.</li>
                <li>Información de registro de la cuenta, como nombres de usuario y contraseñas.</li>
            </ul>

            <p><strong>2. Uso de la Información</strong></p>
            <p>Utilizamos la información recopilada para los siguientes fines:</p>
            <ul>
                <li>Personalizar y mejorar la experiencia del usuario en nuestro sitio web.</li>
                <li>Brindar servicios solicitados por los usuarios.</li>
                <li>Mantener registros internos y cumplir con obligaciones legales.</li>
            </ul>

            <p><strong>3. Compartir Información</strong></p>
            <p>En Tattoozaiko, no compartimos información personal con terceros, excepto en las siguientes circunstancias:</p>
            <ul>
                <li>Con el consentimiento del usuario.</li>
                <li>Para cumplir con obligaciones legales.</li>
                <li>Para proteger nuestros derechos, privacidad, seguridad o propiedad.</li>

            </ul>

            <p><strong>4. Cookies y Tecnologías Similares</strong></p>
            <p>Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar información sobre la navegación. Los usuarios pueden gestionar las preferencias de cookies a través de la configuración de su navegador.</p>

            <p><strong>5. Seguridad de la Información</strong></p>
            <p>Tattoozaiko se compromete a proteger la información del usuario. Implementamos medidas de seguridad, como el cifrado de datos, cortafuegos y controles de acceso, para prevenir el acceso no autorizado a la información personal.</p>

            <p><strong>6. Enlaces a Sitios de Terceros</strong></p>
            <p>Nuestra política de privacidad no se aplica a sitios web de terceros a los que puedas acceder a través de enlaces proporcionados en Tattoozaiko. Te recomendamos revisar las políticas de privacidad de esos sitios.</p>

            <p><strong>7. Cambios en la Política de Privacidad</strong></p>
            <p>Notificaremos a los usuarios sobre cambios en nuestra política de privacidad a través de anuncios en el sitio web. Los usuarios pueden consultar la versión más reciente de la política en todo momento.</p>

            <p><strong>8. Derechos de los Usuarios</strong></p>
            <p>Los usuarios tienen derechos relacionados con su información personal, incluyendo el derecho de acceso, rectificación y eliminación de sus datos. Para ejercer estos derechos o realizar preguntas sobre su información personal, pueden ponerse en contacto con nosotros.</p>

            <p><strong>9. Consentimiento</strong></p>
            <p>Al utilizar nuestro sitio web, los usuarios aceptan esta política de privacidad y consienten la recopilación y el uso de su información personal de acuerdo con los términos aquí establecidos.</p>

            <p><strong>10. Información de Contacto</strong></p>
            <p>Si los usuarios tienen preguntas o inquietudes sobre nuestra política de privacidad, pueden ponerse en contacto con nosotros en la siguiente dirección de correo electrónico:Tatto@gmail.com.</p>

            <p><strong>Descargo de Responsabilidad</strong></p>
            <p>Tattoozaiko no se hace responsable de la información proporcionada por los usuarios en enlaces públicos, foros o secciones de comentarios en el sitio web.</p>
            <FlechaArriba></FlechaArriba>

        </div>
    );
}

export default PoliticaPrivacidad;
