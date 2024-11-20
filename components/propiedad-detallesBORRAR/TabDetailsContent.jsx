import DescriptionsText from "./DescriptionsText";
import InfoDeRed from "./InfoDeRed";
import InfoPrivada from "./InfoPrivada";
import TableArchivos from "./TableArchivos";
import Archivos from "./Archivos";
import Mensajes from "./Mensajes";
import PropertyVideo from "../../common/listing-details/PropertyVideo";
import Planos from "./Planos";

const TabDetailsContent = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Datos públicos
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#datosDeRed"
            role="tab"
            aria-controls="datosDeRed"
            aria-selected="false"
          >
            Datos de red
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#agetns"
            role="tab"
            aria-controls="agetns"
            aria-selected="false"
          >
            Datos del grupo
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#datosPrivados"
            role="tab"
            aria-controls="datosPrivados"
            aria-selected="false"
          >
            Datos privados
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#multimedia"
            role="tab"
            aria-controls="multimedia"
            aria-selected="false"
          >
            Multimedia
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#archivos"
            role="tab"
            aria-controls="archivos"
            aria-selected="false"
          >
            Archivos
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#mensajes"
            role="tab"
            aria-controls="mensajes"
            aria-selected="false"
          >
            Mensajes {/*(notaDev: sólo si es mi prop.)*/}
          </a>
        </li>

      </ul>
      {/* End .nav nav-tabs */}


      <div className="tab-content" id="myTabContent2">

        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText />
                  <PropertyVideo />
                  <Planos />
                </div>                
              </div>
            </div>
          </div>
        </div>


        <div
          className="tab-pane fade"
          id="datosDeRed"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <InfoDeRed />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className="tab-pane fade"
          id="agetns"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <div className="additional_details mb-3">
                    <h4 className="title mb-3">Datos del grupo</h4>     
                    <p className="mb15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci nec erat convallis fermentum a eget odio. Donec at purus quis odio interdum vestibulum. Praesent bibendum arcu at semper viverra. Nulla facilisi. Vestibulum euismod lectus a nibh convallis, non aliquet arcu tempus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="tab-pane fade" 
          id="datosPrivados" 
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <InfoPrivada />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199" 
          id="multimedia" 
          role="tabpanel"
        >
          <div className="row  mt30">
            <TableArchivos />
          </div>
        </div>

        <div className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199" 
          id="archivos" 
          role="tabpanel"
        >
          <div className="property_attachment_area" style={{border: '0px'}}>
            <h4 className="mb30">Archivos adjuntos</h4>
            <div className="iba_container style2">
              <Archivos />
            </div>
          </div>
        </div>

        <div className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199" 
          id="mensajes" 
          role="tabpanel"
        >
          <div className="row">
            <div className="col-lg-12">
              <div id="myreview" className="my_dashboard_review">
                <div className="review_content">
                  <h4>Mensajes clientes</h4>
                  <Mensajes />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default TabDetailsContent;
