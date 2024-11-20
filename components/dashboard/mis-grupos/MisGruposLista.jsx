'use client';

import { useEffect, useState } from 'react';
import SearchBox from "./SearchBox";
//import Image from "next/image";
import Link from "next/link";

const MisGruposLista = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');    
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/grupos`, {
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
  }, [data.length]); 

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = data.filter(item => 
      item.NombreGrupo.toLowerCase().includes(term.toLowerCase()) || 
      item.DescripcionGrupo.toLowerCase().includes(term.toLowerCase()) 
    );
    setFilteredData(filtered);
    //setTotalItems(filtered.length); 
  };

  /*const reviewContent = [
    {
      id: 1,
      img: "/assets/images/resource/review.png",
      reviewOn: "Grupo Lorem Ipsum",
      text: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`,
    },
    {
      id: 2,
      img: "/assets/images/resource/review4.png",
      reviewOn: "Grupo de pruebas",
      text: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`,
    },
  ];*/

  return (
    <>

      <div className="row align-items-center">
        <div className="col-lg-8 col-xl-9 mb20">
          <div className="breadcrumb_content style2 mb30-991">
            <h2 className="breadcrumb_title">Mis Grupos</h2>
            <p>Puede utilizar los filtros de búsqueda para gestionar sus grupos</p>
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

          {filteredData?.map((item) => (
            <div className="media mt30 align-items-center" key={item.Id}>
              <div className="media-body d-flex align-items-center">
                <div>
                <Link href="/mis-grupos/grupo-detalles/">                  
                  <h5 className="review_title mt-0 font-extrabold">
                      {item.NombreGrupo}
                    <span className="sspd_review float-end">{item.ratings}</span>
                  </h5>
                </Link>                
                <a className="review_date" href="#">
                  Creado <strong>{new Date(item.Creado).toLocaleDateString('es-ES')}</strong> (actualizado <strong>{new Date(item.Actualizado).toLocaleDateString('es-ES')}</strong>)
                </a>
                <p className="para">{item.DescripcionGrupo}</p>
                </div>
              </div>
                <ul className="view_edit_delete_list mb-0 mt-8 flex flex-col sm:flex-row justify-end">
                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ver"
                  >
                    <Link href="">
                      <span className="flaticon-view"></span>
                    </Link>
                  </li>

                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Integrantes"
                  >
                    <Link href="">
                      <span className="flaticon-user"></span>
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

export default MisGruposLista;
