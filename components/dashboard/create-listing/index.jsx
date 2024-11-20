"use client";

import { useState } from 'react';
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
//import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
//import PropertyMediaUploader from "./PropertyMediaUploader";
import DatosSuperficie from "./DatosSuperficie";
import DatosMonetarios from "./DatosMonetarios";
import TableData from "./TableData";
import TableArchivos from "./TableArchivos";
import InfoRed from "./InfoRed";
import InfoPrivada from "./InfoPrivada";

const index = () => {

  const [activeDiv, setActiveDiv] = useState(1);

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

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Agregar propiedad</h2>
                    <p>Ingrese los datos de la nueva propiedad</p>

                    <div className="buttons_bar mt-4">
                      <div className="btn_group float-start">
                        <button 
                          className={`btn ${activeDiv === 1 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(1)}                        
                        >
                          Información de la propiedad
                        </button>
                        <button 
                          className={`btn ${activeDiv === 2 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(2)}                        
                        >
                          Multimedia
                        </button>
                      </div>

                      <div className="btn_group float-end">
                        <button 
                          className={`btn ${activeDiv === 3 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(3)}                                                
                        >Info Grupo</button>
                        <button 
                          className={`btn ${activeDiv === 4 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(4)}                                                
                        >Info Red</button>
                        <button 
                          className={`btn ${activeDiv === 5 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(5)}                                                
                        >Info Privada</button>
                        <button 
                          className={`btn ${activeDiv === 6 ? 'active' : ''}`}
                          onClick={() => setActiveDiv(6)}                                                
                        >Archivos</button>
                      </div>
                    </div>

                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">

                {activeDiv === 1 && 

                <form className="infoPropiedad info_propiedad_container">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Nueva propiedad</h3>
                      </div>
                      <CreateList />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="row">                    
                      <div className="col-lg-12">
                        <h3 className="mb30">Datos de la propiedad</h3>
                      </div>
                      <DetailedInfo />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Datos de ubicación</h3>
                      </div>
                      <LocationField />
                    </div>
                  </div>


                  <div className="my_dashboard_review mt30">
                    <div className="row">                             
                      <div className="col-lg-12">
                        <h3 className="mb30">Datos superficie</h3>
                      </div>
                      <DatosSuperficie />
                    </div>
                  </div>

                  <div className="my_dashboard_review mt30">
                    <div className="row">                             
                      <div className="col-lg-12">
                        <h3 className="mb30">Datos monetarios</h3>
                      </div>
                      <DatosMonetarios />
                    </div>
                  </div>

                </form>
                }

                {activeDiv === 2 &&                 
                <div className="shop_single_tab_content style2 multimedia_container">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#fotos"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Fotos
                      </a>
                    </li>
                    {/* End Description tab */}

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#videos"
                        role="tab"
                        aria-controls="listing"
                        aria-selected="false"
                      >
                        Videos
                      </a>
                    </li>
                    {/* End Listing tab */}

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#planos"
                        role="tab"
                        aria-controls="listing"
                        aria-selected="false"
                      >
                        Planos
                      </a>
                    </li>
                    {/* End Listing tab */}

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#recorrido360"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Recorrido 360
                      </a>
                    </li>
                    {/* End Reviews tab */}
                  </ul>

                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="fotos"
                      role="tabpanel"
                    >
                      <div className="p-4 bg-white">

                        <div className="row">
                          <div className="col-lg-4 col-xl-4">
                            <div className="breadcrumb_content style2">
                              <h3 className="breadcrumb_title">Fotos</h3>
                            </div>
                          </div>
                          {/* End .col */}

                          <div className="col-lg-8 col-xl-8 my_profile_setting_input overflow-hidden">
                            <button className="btn btn2 float-end m-1"><i class="flaticon-plus m-1"></i>Agregar foto</button>
                          </div>
                          {/* End .col */}
                        </div>

                        <div className="col-lg-12">
                          <div className="mb40 table-container">
                            <div className="property_table">
                              <div className="table-responsive mt0">
                                <TableData />
                              </div>
                              {/* End .table-responsive */}
                            </div>
                            {/* End .property_table */}
                          </div>
                        </div>
                        {/* End .col */}
                      </div>
                      {/* End row */}

                    </div>
                    {/* End fotos details content*/}


                    <div
                      className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
                      id="videos"
                      role="tabpanel"
                    >
                      <div className="p-4 bg-white">

                        <div className="row">
                          <div className="col-lg-4 col-xl-4">
                            <div className="breadcrumb_content style2">
                              <h3 className="breadcrumb_title">Videos</h3>
                            </div>
                          </div>
                          {/* End .col */}

                          <div className="col-lg-8 col-xl-8 my_profile_setting_input overflow-hidden">
                            <button className="btn btn2 float-end m-1"><i class="flaticon-plus m-1"></i>Agregar video</button>
                          </div>
                          {/* End .col */}
                        </div>

                        <div className="col-lg-12">
                          <div className="mb40 table-container">
                            <div className="property_table">
                              <div className="table-responsive mt0">
                                <TableData />
                              </div>
                              {/* End .table-responsive */}
                            </div>
                            {/* End .property_table */}
                          </div>
                        </div>
                        {/* End .col */}
                      </div>
                      {/* End row */}

                    </div>
                    {/* End videos content*/}


                    <div
                      className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
                      id="planos"
                      role="tabpanel"
                    >
                      <div className="p-4 bg-white">      
                        <div className="row">
                          <div className="col-lg-4 col-xl-4">
                            <div className="breadcrumb_content style2">
                              <h3 className="breadcrumb_title">Planos</h3>
                            </div>
                          </div>
                          {/* End .col */}

                          <div className="col-lg-8 col-xl-8 my_profile_setting_input overflow-hidden">
                            <button className="btn btn2 float-end m-1"><i class="flaticon-plus m-1"></i>Agregar plano</button>
                          </div>
                          {/* End .col */}
                        </div>

                        <div className="col-lg-12">
                          <div className="mb40 table-container">
                            <div className="property_table">
                              <div className="table-responsive mt0">
                                <TableData />
                              </div>
                              {/* End .table-responsive */}
                            </div>
                            {/* End .property_table */}
                          </div>
                        </div>
                        {/* End .col */}

                      </div>                        
                    </div>
                    {/* End planos content*/}


                    <div
                      className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
                      id="recorrido360"
                      role="tabpanel"
                    >
                      <div className="p-4 bg-white">
                        <div className="row">
                          <div className="col-lg-4 col-xl-4">
                            <div className="breadcrumb_content style2">
                              <h3 className="breadcrumb_title">Recorridos 360</h3>
                            </div>
                          </div>
                          {/* End .col */}

                          <div className="col-lg-8 col-xl-8 my_profile_setting_input overflow-hidden">
                            <button className="btn btn2 float-end m-1"><i class="flaticon-plus m-1"></i>Agregar recorrido</button>
                          </div>
                          {/* End .col */}
                        </div>

                        <div className="col-lg-12">
                          <div className="mb40 table-container">
                            <div className="property_table">
                              <div className="table-responsive mt0">
                                <TableData />
                              </div>
                              {/* End .table-responsive */}
                            </div>
                            {/* End .property_table */}
                          </div>
                        </div>
                        {/* End .col */}

                      </div>
                    </div>
                    {/* End recorrido360 details content*/}

                  </div>
                  {/* End tab-content */}

                </div>    
                }              

                {activeDiv === 3 && 

                <div className="info_grupo_container">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Info grupo</h3>
                      </div>

                    </div>
                  </div>
                </div>
                }

                {activeDiv === 4 && 

                <div className="info_grupo_container">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Info red</h3>
                      </div>
                      <InfoRed />
                    </div>
                  </div>
                </div>
                }

                {activeDiv === 5 && 

                <div className="info_grupo_container">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Info privada</h3>
                      </div>
                      <InfoPrivada />
                    </div>
                  </div>
                </div>
                }

                {activeDiv === 6 && 

                <div className="info_grupo_container">
                  <div className="my_dashboard_review">
                    <div className="row">

                      {/*<div className="col-lg-12">
                        <h3 className="mb30">Archivos</h3>
                      </div>*/}

                      <div className="row">
                        <div className="col-lg-4 col-xl-4">
                          <div className="breadcrumb_content style2">
                            <h3 className="breadcrumb_title">Archivos</h3>
                          </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-8 col-xl-8 my_profile_setting_input overflow-hidden">
                          <button className="btn btn2 float-end m-1"><i class="flaticon-plus m-1"></i>Agregar archivo</button>
                        </div>
                        {/* End .col */}
                      </div>

                      <div className="col-lg-12">
                        <div className="mb40 table-container">
                          <div className="property_table">
                            <div className="table-responsive mt0">
                              <TableArchivos />
                            </div>
                            {/* End .table-responsive */}
                          </div>
                          {/* End .property_table */}
                        </div>
                      </div>
                      {/* End .col */}

                    </div>
                  </div>
                </div>
                }


                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2024 MLS Propiedades</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
