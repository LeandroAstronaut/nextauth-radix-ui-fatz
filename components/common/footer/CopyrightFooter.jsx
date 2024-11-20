import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Inicio", routeLink: "/" },
    { id: 2, name: "Propiedades", routeLink: "/listing-grid-v3" },
    { id: 4, name: "Institucional", routeLink: "/about-us" },
    { id: 4, name: "FAQ", routeLink: "/faq" },
    { id: 5, name: "Novedades", routeLink: "/blog-list-3" },
    { id: 6, name: "Contacto", routeLink: "/contact" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="https://mlspropiedades.com"
              target="_blank"
              rel="noreferrer"
            >
              MLS Propiedades
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
