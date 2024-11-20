import Image from "next/image";

const Creaator = () => {
  return (
    <div className="media d-flex">
      <Image
        width={90}
        height={90}
        className="me-3"
        src="/assets/images/team/lc1.png"
        alt="lc1.png"
      />
      <div className="media-body">
        <h5 className="mt-0 mb0">Inmobiliaria San Pedro</h5>
        <p className="mb0">(123)456-7890</p>
        <p className="mb0">info@inmobiliariasanpedro.com.ar</p>
        <a className="text-thm" href="#">
          Ver inmuebles
        </a>
      </div>
    </div>
  );
};

export default Creaator;
