import Image from "next/image";
//import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
//import Footer from "../../components/common/footer/Footer";
//import Header from "../../components/common/header/DefaultHeader";
import Header from "../../components/common/header/dashboard/Header";
import SidebarMenu from "../../components/common/header/dashboard/SidebarMenu";
import MobileMenu from "../../components/common/header/MobileMenu";
//import PopupSignInUp from "../../components/common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import SidebarGrupo from "./SidebarGrupo";
import TabDetailsContent from "./TabDetailsContent";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Modal --> */}
      {/*<PopupSignInUp />*/}

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <BreadCrumb2 />
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">

                  {/*<div className="feat_property list agency">
                    <div className="thumb">
                      <Image
                        width={265}
                        height={232}
                        className="img-whp contain"
                        src="/assets/images/agency/2.jpg"
                        alt="11.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item dn"></li>
                          <li className="list-inline-item">
                            <a href="#">2 Listings</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="details">
                      <div className="tc_content">
                        <h4>Christopher Pakulla</h4>
                        <p className="text-thm">Agent</p>
                        <ul className="prop_details mb0">
                          <li>
                            <a href="#">Office: 134 456 3210</a>
                          </li>
                          <li>
                            <a href="#">Mobile: 891 456 9874</a>
                          </li>
                          <li>
                            <a href="#">Fax: 342 654 1258</a>
                          </li>
                          <li>
                            <a href="#">Email: pakulla@findhouse.com</a>
                          </li>
                        </ul>
                      </div>

                      <div className="fp_footer">
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
                              <i className="fa fa-pinterest"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-google"></i>
                            </a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-end text-thm">
                          View My Listings <i className="fa fa-angle-right"></i>
                        </div>
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
            </div>
            {/* End .col-md-12 col-lg-8 content left side */}

            <div className="col-lg-4 col-xl-4">
              <SidebarGrupo />
            </div>
            {/* End .col-lg-4 col-xl-4 content left side */}

            <div className="row mt50">
              <div className="col-lg-12">
                <div className="copyright-widget text-center">
                  <p>© 2024 MLS Propiedades.</p>
                </div>
              </div>
            </div>
            {/* End .row */}

          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Footer --> */}
      {/*<section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>*/}

      {/* <!-- Our Footer Bottom Area --> */}
      {/*<section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>*/}
    </>
  );
};

export default index;
