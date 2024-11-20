import Image from "next/image";
import properties from "../../../data/properties";
import Link from "next/link";

const TableData = () => {
  let theadConent = [
    "Título",
    "Fecha",
    "Estado",
    "Visibilidad",        
    "Acción",
  ];
  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id}>

      <td><h4>{item.title}</h4></td>
      {/* End td */}

      <td>30 Diciembre, 2020</td>
      {/* End td */}

      <td>
        <span className="status_tag badge">Activa</span>
      </td>
      {/* End td */}

      <td>
        <span className="status_tag badge m-1">En red</span>
        <span className="status_tag badge m-1">En grupos</span>
      </td>
      {/* End td */}

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
          {/* End li */}

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
          {/* End li */}

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
      {/* End td */}
    </tr>
  ));

  return (
    <>
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
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
    </>
  );
};

export default TableData;
