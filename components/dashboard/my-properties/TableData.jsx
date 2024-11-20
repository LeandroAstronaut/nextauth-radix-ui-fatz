'use client';

import { useEffect, useState } from 'react';
import SearchBox from "./SearchBox";
import Filtering from "./Filtering";
import Link from "next/link";

const TableData = ({ currentPage, itemsPerPage, setTotalItems }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');    
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/propiedades`, {
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
      item.Titulo.toLowerCase().includes(term.toLowerCase()) || 
      item.Calle.toLowerCase().includes(term.toLowerCase()) ||
      (item.Altura !== undefined && String(item.Altura).toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredData(filtered);
    setTotalItems(filtered.length); 
  };

  let theadConent = [
    "Título",
    "Fecha pubicación",
    "Estado",
    "Acción",
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  let tbodyContent;

  if (loading) {
    tbodyContent = <tr><td colSpan="4"><div>Cargando ...</div></td></tr>;
  } else if (error) {
    tbodyContent = <tr><td colSpan="4"><div>Error: {error}</div></td></tr>;
  } else {

    tbodyContent = paginatedData?.map((item) => (    
    <tr key={item.Id}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img
              width={150}
              height={220}
              className="img-whp cover"
              src={item.FotoPortada}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Alquiler</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.Titulo}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.Calle} {item.Altura}
              </p>
              <a className="fp_price text-thm" href="#">
                ${item.Precio}
                <small>/mes</small>
              </a>
            </div>
          </div>
        </div>
      </td>

      <td>30 Diciembre, 2020</td>

      <td>
        <span className="status_tag badge">Pendiente</span>
      </td>

      <td>
        <ul className="view_edit_delete_list mb0">
          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Ver"
          >
            <Link href="/my-properties/propiedad-detalles">
              <span className="flaticon-view"></span>
            </Link>
          </li>

          <li
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title="Editar"
          >
            <Link href="/update-listing">
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
      </td>

    </tr>
  ));
  }

  return (
    <>
      <div className="row mt30 mb10">

        <div className="col-lg-4 col-xl-4 mb0">
          <div className="breadcrumb_content style2 mb0">
            <h2 className="breadcrumb_title">Mis propiedades</h2>
          </div>
        </div>

        <div className="col-lg-8 col-xl-8">
          <div className="candidate_revew_select style2 text-end mb10">
            <ul className="mb0">
              <li className="list-inline-item">
                <div className="candidate_revew_search_box course fn-520">
                  <SearchBox  onSearchChange={handleSearchChange} />
                </div>
              </li>

              <li className="list-inline-item">
                <Filtering />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
