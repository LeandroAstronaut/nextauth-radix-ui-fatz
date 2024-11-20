'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
//import blogs from "../../data/blogs";
import Image from "next/image";

const Blogs = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the endpoint
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/novedades`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);  

  return (
    <>
      {data.slice(0, 3).map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id}`}>
                <img
                  width={343}
                  height={220}
                  className="img-whp w-100 h-100 cover"
                  src="/assets/images/blog/1.jpg"
                  alt="bh1.jpg"
                />
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                {/*<p className="text-thm">{item.postMeta}</p>*/}
                <h4>
                  <Link href={`/blog-details/${item.id}`}>{item.TituloNovedad}</Link>
                </h4>
              </div>
              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <img
                        width={40}
                        height={40}
                        src="/assets/images/property/pposter1.png"
                        alt="pposter1.png"
                      />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agent-v2">Inmobiliaria X</Link>
                  </li>
                </ul>
                <a className="fp_pdate float-end" href="#">
                  {new Date(item.Creado).toLocaleDateString('es-ES')}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
