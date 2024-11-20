'use client';

import { useEffect, useState } from 'react';
import SearchBox from "./SearchBox";
//import Image from "next/image";
import Link from "next/link";

const UsuariosLista = ({ currentPage, itemsPerPage, setTotalItems }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');    
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/usuarios`, {
          cache: 'no-store',
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
        setFilteredData(result);
        setTotalItems(result.length);       
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (data.length === 0) {
      fetchData();
    }
  }, [data.length, setTotalItems]); 

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = data.filter(item => 
      item.Inmobiliaria.toLowerCase().includes(term.toLowerCase()) || 
      item.Titular.toLowerCase().includes(term.toLowerCase()) 
    );
    setFilteredData(filtered);
    setTotalItems(filtered.length);     
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <>

      <div className="row align-items-center">
        <div className="col-lg-8 col-xl-9 mb20">
          <div className="breadcrumb_content style2 mb30-991">
            <h2 className="breadcrumb_title">Usuarios</h2>
            <p>Puede utilizar los filtros de búsqueda para gestionar los usuarios</p>
          </div>
        </div>

        <div className="col-lg-4 col-xl-3 mb20">
          <ul className="sasw_list mb0">
            <li className="search_area">
              <SearchBox  onSearchChange={handleSearchChange} />
            </li>
          </ul>
        </div>
      </div>

      <div id="myreview" className="my_dashboard_review">
        <div className="review_content">

          {paginatedData?.map((item) => (
            <div className="media mt30 align-items-center" key={item.Id}>
              <div className="media-body d-flex align-items-center">
                <img
                  width={120}
                  height={120}
                  className="mr-3"
                  src="/assets/images/resource/review4.png"
                  alt="Inmobiliaria imagen"
                />
                <div>
                <h5 className="review_title mt-0">
                  <Link href="/inmobiliarias/inmobiliaria-detalle/">
                    <span className="sspd_review">{item.Nombre} {item.Apellido}</span>
                  </Link>
                </h5>
                <p className="para">{item.Telefono} ({item.Email})</p>                
                <a className="review_date" href="#">
                  Fecha alta: {item.Creado}
                </a>
                </div>
              </div>
                <ul className="view_edit_delete_list mb-0 mt-8 flex flex-col sm:flex-row justify-end">
                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ver"
                  >
                    <Link href="/inmobiliaria-detalles">
                      <span className="flaticon-view"></span>
                    </Link>
                  </li>

                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Editar"
                  >
                    <Link href="/editar-grupo">
                      <span className="flaticon-edit"></span>
                    </Link>
                  </li>

                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    <a href="#">
                      <span className="flaticon-garbage"></span>
                    </a>
                  </li>

                </ul>

              
            </div>
          ))}

        </div>
      </div>

    </>
  );
};

export default UsuariosLista;
