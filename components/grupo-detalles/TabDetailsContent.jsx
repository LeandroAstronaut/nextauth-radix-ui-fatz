import Team from "../agent-view/agent-v2/Team";
import Comments from "../blog-details/Comments";
//import Ratings from "../blog-details/Ratings";
//import ReviewBox from "../blog-details/ReviewBox";
import DescriptionsText from "./DescriptionsText";
import Listings from "./Listings";

const TabDetailsContent = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">

        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#listing"
            role="tab"
            aria-controls="listing"
            aria-selected="true"
          >
            Propiedades
          </a>
        </li>
        {/* End Propiedades tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#mensajes"
            role="tab"
            aria-controls="mensajes"
            aria-selected="false"
          >
            Mensajes
          </a>
        </li>
        {/* End Mensajes tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#agetns"
            role="tab"
            aria-controls="listing"
            aria-selected="false"
          >
            Integrantes
          </a>
        </li>
        {/* End Listing tab */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="false"
          >
            Info y Adjuntos
          </a>
        </li>
        {/* End Description tab */}

      </ul>
      {/* End .nav nav-tabs */}

      <div className="tab-content" id="myTabContent2">

        <div
          className="tab-pane fade  show active row pl15 pl0-1199 pr15 pr0-1199"
          id="listing"
          role="tabpanel"
        >
          <Listings />
        </div>
        {/* End Listing details content*/}

        <div className="tab-pane fade" id="mensajes" role="tabpanel">
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="total_review">
                <h4>896 Mensajes</h4>
                <ul className="review_star_list mb0 pl10">
                </ul>
                {/*<a className="tr_outoff pl10" href="#">
                  ( 4.5 out of 5 )
                </a>*/}
                <a className="write_review float-end fn-xsd" href="#">
                  Nuevo mensaje
                </a>
              </div>
              {/* End .total_review */}

              <div className="custom_hr"></div>

              <div className="mbp_comment_form style2">
                <h4>Mensajes</h4>
                <ul className="review_star">
                  <li className="list-inline-item">
                    <span className="sspd_review">
                    </span>
                  </li>
                  <li className="list-inline-item pr15">
                    <p>Mensajes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Reviews details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="agetns"
          role="tabpanel"
        >
          <div className="row  mt30">
            <Team />
          </div>
        </div>
        {/* End Listing details content*/}

        <div
          className="tab-pane fade"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}

      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
