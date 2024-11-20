'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBox from "./SearchBox";
import BreadCrumbBlog from "./BreadCrumbBlog";

const Blog = ({ currentPage, itemsPerPage, setTotalItems }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/novedades`, {
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
  }, [setTotalItems]);
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = data.filter(item => 
      item.TituloNovedad.toLowerCase().includes(term.toLowerCase()) || 
      item.SubtituloNovedad.toLowerCase().includes(term.toLowerCase()) ||
      item.TextoNovedad.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
    setTotalItems(filtered.length); 
  };

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/novedad-detalle/${id}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className="row">


            <div className="col-xl-4">
              <BreadCrumbBlog />
            </div>

        <div className="col-lg-8 col-xl-8 mt30">
          <div className="candidate_revew_select style2 text-end mb10">
            <ul className="mb0">

              <li className="list-inline-item">
                <Link href={`/crear-novedad`}><button className="btn btn1" type="button">Agregar novedad</button></Link>                
              </li>

              <li className="list-inline-item">
                <SearchBox onSearchChange={handleSearchChange} />
              </li>

            </ul>
          </div>
        </div>
      </div>

      {loading && <div>Cargando ...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && paginatedData.map((item) => (
        <div className="for_blog feat_property" key={item.id}>
          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/novedad-detalle/${item.Id}`}>{item.TituloNovedad}</Link>
              </h4>
              <p><strong>{item.SubtituloNovedad}</strong></p>
              <p>{item.TextoNovedad.slice(0, 285)}</p>
            </div>

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-calendar pr10"></span>{" "}
                    Publicada el {new Date(item.Creado).toLocaleDateString('es-ES')}
                  </a>
                </li>
              </ul>
              <span className="fp_pdate float-end text-thm" onClick={() => handleClick(item.Id)} style={{ cursor: 'pointer' }}>
                Leer más <span className="flaticon-next"></span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
