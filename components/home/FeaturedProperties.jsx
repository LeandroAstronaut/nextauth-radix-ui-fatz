'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
//import properties from "../../data/properties";
//import Image from "next/image";

const FeaturedProperties = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the endpoint
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/web/propiedades`, { cache: 'no-store' });
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

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  let content = data?.slice(0, 3)?.map((item) => (
    <div className="item" key={item.id}>
      <div className="feat_property">
        <div className="thumb">
          <img
            width={343}
            height={220}
            className="img-whp w-100 h-100 cover"
            src={item.FotoPortada}
            alt={item.FotoPortada}
        />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              {/*item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))*/}
            </ul>
            {/* End .tag */}

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
            {/* End .icon */}

            <Link href={`/detalle-propiedad/1`} className="fp_price">
              ${item.Precio}
              <small></small>
            </Link>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item.tipoPropiedad}</p>
            <h4>
              <Link href={`/detalle-propiedad/1`}>{item.Titulo}</Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {item.Calle+' '+item.Altura}
            </p>

            <ul className="prop_details mb0">
              {item.Dormitorios && (
                <li className="list-inline-item">
                  <a href="#">
                    Dormitorios: {item.Dormitorios}
                  </a>
                </li>
              )}
              {item.Banos && (
                <li className="list-inline-item">
                  <a href="#">
                    Baños: {item.Banos}
                  </a>
                </li>
              )}
              {item.SuperficieTotal && (
                <li className="list-inline-item">
                  <a href="#">
                    Sup.: {item.SuperficieTotal}
                  </a>
                </li>
              )}
            </ul>
          </div>
          {/* End .tc_content */}

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
            <div className="fp_pdate float-end">{new Date(item.Creado).toLocaleDateString('es-ES')}</div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
  ));

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
