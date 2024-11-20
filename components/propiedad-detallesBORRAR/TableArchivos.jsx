import Image from "next/image";
import Link from "next/link";

const TableData = () => {
  let theadConent = [
    "Nombre",
    "Fecha",
    "Tipo",   
    "Ver",
  ];

  return (
    <div class="pt10">
      <table className="table mb25">
        
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          <tr key={1}>
            <td><h4>Archivo 1</h4></td>
            <td>30 Diciembre, 2020</td>
            <td>
              <span className="status_tag badge">video</span>
            </td>
            <td>
              <Link href="/my-properties/propiedad-detalles">
                Abrir
              </Link>
            </td>
          </tr>

          <tr key={2}>
            <td><h4>Archivo 2</h4></td>
            <td>30 Marzo, 2024</td>
            <td>
              <span className="status_tag badge">video</span>
            </td>
            <td>
              <Link href="/my-properties/propiedad-detalles">
                Abrir
              </Link>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default TableData;
