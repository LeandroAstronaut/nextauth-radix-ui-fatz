import Link from "next/link";

const Mensajes = () => {
    return (
      <>
        <div className="media mt30" key={1}>
          <div className="media-body">
            <h5 className="review_title mt-0">
              {" "}
              <Link href="">
                <span className="text-thm"><strong>Necesito cotización de la propiedad</strong></span>
              </Link>
              <span className="float-end">Néstor Fernández (nestor@fernandez.com)</span>
            </h5>
            <a className="review_date" href="#">
              Diciembre 28, 2020
            </a>
            <p className="para">Me dirijo a usted para solicitar una cotización de la propiedad. Estoy interesado en conocer los costos estimados, términos y cualquier otra información relevante para considerar esta propiedad.</p>

          </div>
        </div>
      
      </>
    );
  };
  
  export default Mensajes;
  