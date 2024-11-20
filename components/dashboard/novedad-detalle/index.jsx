"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
//import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import Social from "../../common/footer/Social";
import BreadCrumb2 from "./BreadCrumb2";

const index = ({id}) => {
  const [novedad, setNovedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNovedad = async () => {
      try {
        const res = await fetch(`/api/novedades/${id}`);
        if (!res.ok) throw new Error("No se encontró la novedad");
        const data = await res.json();
        setNovedad(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNovedad();
  }, [id]);

  if (loading) return <div>Cargando novedad...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />

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

      {/* <!-- Main Blog Post Content --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2 />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <div className="blog_sp_tag">
                    <a href="#">Construction</a>
                  </div>
                  <h3 className="blog_sp_title">
                    {novedad.TituloNovedad}
                  </h3>
                  <ul className="blog_sp_post_meta">
                    <li className="list-inline-item">
                      <a href="#">
                        <Image
                          width={40}
                          height={40}
                          src="/assets/images/property/pposter1.png"
                          alt="pposter1.png"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Martin Perez</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-calendar"></span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Enero 16, 2020</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-view"></span>
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-chat"></span>
                    </li>
                  </ul>

                  <div className="details">
                    <p>
                      <strong>{novedad.SubtituloNovedad}</strong>
                    </p>

                    <p className="mb30">
                      {novedad.TextoNovedad}
                    </p>
                  </div>
                  <ul className="blog_post_share">
                    <li>
                      <p>Compartir</p>
                    </li>
                    <Social />
                  </ul>
                  {/* End .blog_post_share */}
                </div>
                {/* End .mbp_thumb_post */}

                {/*<div className="mbp_pagination_tab">
                  <Pagination />
                </div>*/}
                {/* End mbp_pagination_tab */}

                {/*<div className="product_single_content mb30">
                  <div className="mbp_pagination_comments">
                    <div className="total_review">
                      <h4>896 Reviews</h4>
                      <ul className="review_star_list mb0 pl10">
                        <Ratings />
                      </ul>
                      <a className="tr_outoff pl10" href="#">
                        ( 4.5 out of 5 )
                      </a>
                      <a className="write_review float-end fn-xsd" href="#">
                        Write a Review
                      </a>
                    </div>

                    <Comments />
                    <div className="custom_hr"></div>
                  </div>
                </div>*/}
                {/* End .product_single_content  */}

                {/*<div className="bsp_reveiw_wrt">
                  <h4>Write a Review</h4>

                  <ul className="review_star">
                    <li className="list-inline-item">
                      <span className="sspd_review">
                        <ul>
                          <Ratings />
                        </ul>
                      </span>
                    </li>
                    <li className="list-inline-item pr15">
                      <p>Your Rating & Review</p>
                    </li>
                  </ul>
                  <ReviewBox />
                </div>*/}
                {/* End .bsp_reveiw_wrt */}
              </div>
              {/* End .main_blog_post_content */}

              {/*<div className="row">
                <div className="col-lg-12 mb20">
                  <h4>Related Posts</h4>
                </div>
                <RelatedPost />
              </div>*/}
            </div>
            {/* End .col */}

            {/*<div className="col-lg-4">
              <BlogSidebar />
            </div>*/}
            {/* End Sidebar column */}
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
