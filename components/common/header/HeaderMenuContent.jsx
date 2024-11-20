'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderMenuContent = ({ float = "" }) => {
  const pathname = usePathname();

  const home = [
    {
      id: 1,
      name: "Home 1",
      routerPath: "/",
    },
  ];

  const propiedades = [
    { id: 1, name: "Propiedades", routerPath: "/listing-grid-v3" },
  ];

  const institucional = [
      { id: 1, name: "Institucional", routerPath: "/about-us" },
  ];

  const faq = [
    { id: 1, name: "Faq", routerPath: "/faq" },
  ];
    
  const blog = [
  //  { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
  //  { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Noticias", routerPath: "/noticias" },
  //  {
  //    id: 4,
  //    name: "Blog Details",
  //    routerPath: "/blog-details",
  //  },
  ];


  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Bienvenido</span>
          {/*<span className="arrow"></span>*/}
        </a>
        {/* <!-- Level Two--> */}

      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="/listing-grid-v3"
          className={
            propiedades.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Propiedades</span>
        </a>
      </li>
      {/* End .dropitem */}


      <li className="dropitem">
        <a
          href="/about-us"
          className={
            institucional.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Institucional</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="/faq"
          className={
            faq.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Faq</span>
        </a>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="/noticias"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Novedades</span>
          {/*<span className="arrow"></span>*/}
        </a>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contáctenos
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        <a
          href="/login"
          className="btn flaticon-user"
          //data-bs-toggle="modal"
          //data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg ml10 mr10">Ingresar</span>
        </a>

        {/*<Link href="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg"> Create Listing</span>
        </Link>*/}
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
