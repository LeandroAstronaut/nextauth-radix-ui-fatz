'use client'

import Link from "next/link";

import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname()

  const reviews = [
    { id: 1, name: "Mis grupos", route: "/dashboard/my-review" },
    { id: 2, name: "Crear nuevo grupo", route: "/dashboard/my-review" },
  ];

  const myClients = [
    {
      id: 1,
      name: "Mis clientes",
      route: "/dashboard/mis-clientes",
      icon: "flaticon-user",
    },
    {
      id: 2,
      name: "Mensajes clientes",
      route: "/dashboard/my-review",
      icon: "flaticon-chat",
    },
  ];

  const manageAccount = [
    {
      id: 1,
      name: "Mi inmobiliaria",
      route: "/dashboard/mi-inmobiliaria",
      icon: "flaticon-house",
    },
    {
      id: 2,
      name: "Mi cuenta",
      route: "/dashboard/my-profile",
      icon: "flaticon-user",
    },
    {
      id: 4,
      name: "Agregar usuario (owner)",
      route: "/dashboard/my-profile",
      icon: "flaticon-plus",
    },
    { id: 4, name: "Cerrar sesión", route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <Image
              width={200}
              height={45}
              src="/assets/images/mlslogo-white.svg"
              alt="mlslogo-white.svg"
            />
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Inicio</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/dashboard/my-dashboard", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-layers"></i>
                <span> Bienvenido</span>
              </Link>
            </li>
            <li
              className={`treeview`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-login"></i>
                <span> Solicitudes de acceso</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/inmobiliarias">
                <i className="flaticon-house"></i>
                <span> Inmobiliarias</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/usuarios">
                <i className="flaticon-user"></i>
                <span> Usuarios</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-high-five"></i>
                <span> Grupos</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-chat"></i>
                <span> Novedades</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-user"></i>
                <span> Mi cuenta</span>
              </Link>
            </li>

            <li
              className={`treeview`}
            >
              <Link href="/dashboard/my-dashboard">
                <i className="flaticon-logout"></i>
                <span> Cerrar sesión</span>
              </Link>
            </li>

          </ul>
        </li>
        {/* End Main */}


      </ul>
    </>
  );
};

export default SidebarMenu;
