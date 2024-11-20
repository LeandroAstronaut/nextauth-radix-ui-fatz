"use client";

import { useState } from 'react';
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
//import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import Pagination from "../../common/blog/Pagination";

const ITEMS_PER_PAGE = 3;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          {/*<div className="row">
            <div className="col-xl-6">
              <BreadCrumbBlog />
            </div>
          </div>*/}

          <div className="row">
            <div className="col-lg-12">
              <div className="main_blog_post_content">

                <Blog currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} setTotalItems={setTotalItems}/>

                <div className="mbp_pagination mt20">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalItems / ITEMS_PER_PAGE)}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;