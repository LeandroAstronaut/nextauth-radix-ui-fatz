
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
//import properties from "../../../data/properties";
import Image from "next/image";

const FeaturedItem = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();


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


  // keyword filter
  const keywordHandler = (item) =>
    item.Titulo.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.Calle && location
    ? item.Calle.toLowerCase().includes(location.toLowerCase())
    : true;    
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.Precio < price?.max && item.Precio > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.Banos == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.Dormitorios == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          //parseInt(item.itemDetails[2].number) > area.min && parseInt(item.itemDetails[2].number) < area.max
          parseInt(item.SuperficieTotal) > area.min && parseInt(item.SuperficieTotal) < area.max          
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "all-status") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      if (featured === "featured-all") {
        return item;
      }
      return item.featured === featured;
    }
    return true;
  };

  // status handler
  let content = data
    //?.slice(10, 16)
    ?.filter(keywordHandler)
    ?.filter(locationHandler)
    //?.filter(statusHandler)
    //?.filter(propertiesHandler)
    ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    //?.filter(garagesHandler)
    //?.filter(builtYearsHandler)
    ?.filter(areaHandler)
    //?.filter(advanceHandler)
    //?.sort(statusTypeHandler)
    //?.filter(featuredHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList && "d-flex align-items-center"
          }`}
        >
          <div className="thumb">
            <img
              width={342}
              height={220}
              className="img-whp w-100 h-100 cover"
              src={item.FotoPortada}
              alt={item.FotoPortada}
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0 pt1">
                {item.TipoOperacionId === 1 && (
                  <li className="list-inline-item" key="1">
                    <a href="#">Venta</a>
                  </li>
                )}
                {item.TipoOperacionId === 2 && (
                  <li className="list-inline-item" key="2">
                    <a href="#">Alquiler</a>
                  </li>
                )}                
                {/*item.saleTag.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">{val}</a>
                  </li>
                ))*/}
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link
                href={`/detalle-propiedad/1`}
                className="fp_price"
              >
                ${item.Precio}
                <small></small>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type}</p>
              <h4>
                <Link href={`/detalle-propiedad/1`}>
                  {item.Titulo}
                </Link>
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
                  <Link href="/agent-v1">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/images/property/pposter1.png"
                      alt="pposter1.png"
                    />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v1">Inmobiliaria X</Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{new Date(item.Creado).toLocaleDateString('es-ES')}
              </div>

            </div>
            {/* End .fp_footer */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <>{content}</>;
};

export default FeaturedItem;
