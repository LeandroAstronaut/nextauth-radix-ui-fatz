//import Image from "next/image";
//import Header from "../../components/common/header/dashboard/Header";
import Header from "../common/header/DefaultHeader";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../../components/common/header/MobileMenu";
import TabDetailsContent from "./TabDetailsContent";
import ListingGallery from "./ListingGallery";

const index = () => {
  return (
    <>
      <Header />

      <MobileMenu />

      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container ovh">
          <div className="row">

            <div className="col-lg-12 mt50 mb0">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Propiedades</li>
              </ol>                                              
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Detalle de la propiedad</h2>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="row">

                <div className="col-lg-12">
                  
                  <div className="listing_single_description">
                    <ListingGallery />
                  </div>

                  {/*<div className="feat_property list style2 agent">
                    <div className="thumb">
                      <Image
                        width={286}
                        height={220}
                        className="img-whp"
                        src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="11.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item dn"></li>
                          <li className="list-inline-item">
                            <a href="#">Alquiler</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="details">
                      <div className="tc_content">
                        <h3>Departamento en Carlos Paz</h3>
                        <h4 className="mt0 mb1">Inmobiliaria XX</h4>
                        <p>Departamento en Carlos Paz, Argentina, ubicado a pocos metros del lago, ideal para disfrutar de la naturaleza y la tranquilidad. Ofrece ambientes luminosos, diseño moderno y fácil acceso a las principales atracciones de la ciudad. Perfecto para descansar y vivir una experiencia única cerca del agua.</p>
                      </div>

                      <div className="fp_footer pt0 mt0">
                        <h5 className="mb0">Compartir</h5>
                        <ul className="fp_meta float-start mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                        <button className="float-end btn btn1">
                          Vista pública <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>*/}
                  {/* End .feat_property */}

                  <div className="shop_single_tab_content style2 mt30">
                    <TabDetailsContent />
                  </div>
                </div>
                {/* End .col-12 */}
              </div>


              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2024 MLS Propiedades.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

            </div>
            {/* End .col-md-12 col-lg-8 content left side */}

            {/*<div className="col-lg-4 col-xl-4">
              <SidebarListings />
            </div>*/}
            {/* End .col-lg-4 col-xl-4 content left side */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>

    </>
  );
};

export default index;
