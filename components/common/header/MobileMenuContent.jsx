'use client';

// import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  Sidebar
} from "react-pro-sidebar";
import Link from "next/link";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

{/*const home = [
  {
    name: "Home 1",
    routerPath: "/",
  },
  {
    name: "Home 2",
    routerPath: "/home-2",
  },
  {
    name: "Home 3",
    routerPath: "/home-3",
  },
  {
    name: "Home 4",
    routerPath: "/home-4",
  },
  {
    name: "Home 5",
    routerPath: "/home-5",
  },
  {
    name: "Home 6",
    routerPath: "/home-6",
  },
  {
    name: "Home 7",
    routerPath: "/home-7",
  },
  {
    name: "Home 8",
    routerPath: "/home-8",
  },
  {
    name: "Home 9",
    routerPath: "/home-9",
  },
  {
    name: "Home 10",
    routerPath: "/home-10",
  },
];*/}




const MobileMenuContent = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
<>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={40}
              height={45}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/header-logo2.png"
              alt="header-logo.png"
            />
            <span className="brand-text">FindHouse</span>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
    {/* <Sidebar> */}
    <div style={{maxHeight:'calc(100vh - 100px)', overflowY:'auto'}}>
        <Menu>
          <MenuItem>
            <div
            onClick={()=>router.push("/")}
             
              className={
                pathname === "/" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Bienvenido
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/listing-grid-v3")}
             
              className={
                pathname === "/listing-grid-v3" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Propiedades
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/institucional")}
             
              className={
                pathname === "/institucional" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              Institucional
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/faq")}
    
              className={pathname === "/faq" ? "ui-active" : 'inactive-mobile-menu'}
            >
              Faq
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/novedades")}
    
              className={pathname === "/novedades" ? "ui-active" : 'inactive-mobile-menu'}
            >
              Novedades
            </div>
          </MenuItem>

          <MenuItem>
            <div
            onClick={()=>router.push("/contact")}
    
              className={pathname === "/contact" ? "ui-active" : 'inactive-mobile-menu'}
            >
              Contáctenos
            </div>
          </MenuItem>

          {/*<MenuItem>
            <div
            onClick={()=>router.push("/login")}
        
              className={
                pathname === "/login" ? "ui-active" : 'inactive-mobile-menu'
              }
            >
              <span className="flaticon-user"></span> Ingresar
            </div>
          </MenuItem>*/}
        </Menu>
        </div>

      
        {/*<Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
          style={{width:'90%',margin:'0px auto'}}
        >
          <span className="flaticon-plus"></span> Agregar propiedad
        </Link>*/}
        
      </>
     
   
  );
};

export default MobileMenuContent;
