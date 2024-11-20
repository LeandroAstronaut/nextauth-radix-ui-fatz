'use client'

import Link from "next/link";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const MyAccount = () => {

  const { data: session, status } = useSession();

  const pathname = usePathname()
  const profileMenuItems = [
    { id: 1, name: "Mis propiedades", ruterPath: "/dashboard/my-properties" },
    { id: 2, name: " Mis grupos", ruterPath: "/dashboard/mis-grupos" },
    { id: 3, name: " Mis clientes", ruterPath: "/dashboard/mis-clientes" },
    { id: 4, name: " Mensajes", ruterPath: "/dashboard/my-review" },
  ];

  return (
    <>
      <div className="user_set_header">
        <Image
          width={40}
          height={40}
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
        {session?.user?.name} <br />
          <span className="address">{session?.user?.email}</span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (
          <Link
            href={item.ruterPath}
            key={item.id}
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, pathname)
                ? { color: "#ff5a5f" }
                : undefined
            }
          >
            {item.name}
          </Link>
        ))}

        <button onClick={() => signOut()} >Cerrar sesion</button>

      </div>
    </>
  );
};

export default MyAccount;
