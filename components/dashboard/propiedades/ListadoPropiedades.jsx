import Pagination from "../../common/blog/Pagination";

import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import FilterTopBar from "./FilterTopBar";
import SidebarListing2 from "./SidebarListing2";
import BreadCrumb2 from "./BreadCrumb2";
import Propiedades from "./Propiedades";

const ListadoPropidades = () => {

  return (
    <>
          <div className="row">
            <div className="col-lg-6">
              <BreadCrumb2 />
            </div>

            <div className="col-lg-6 position-relative">
              <div className="listing_list_style mb20-xsd tal-991">
                <GridListButton />
              </div>

              <div className="dn db-991 mt30 mb0">
                <ShowFilter />
              </div>

            </div>

          </div>

          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="sidebar-listing-wrapper">
                <SidebarListing2 />
              </div>

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Búsqueda Avanzada</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <SidebarListing2 />
                </div>
              </div>

            </div>

            <div className="col-md-12 col-lg-8">
              <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar />
                </div>
              </div>

              <div className="row">
                <Propiedades />
              </div>

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>

              </div>

            </div>

            <div className="row mt50">
              <div className="col-lg-12">
                <div className="copyright-widget text-center">
                  <p>© 2024 MLS Propiedades</p>
                </div>
              </div>
            </div>

          </div>

    </>
  );
};

export default ListadoPropidades;