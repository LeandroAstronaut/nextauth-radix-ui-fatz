import dynamic from "next/dynamic";
import CrearUsuario from "@/components/dashboard/crear-usuario";

export const metadata = {
  title: 'Crear grupo || MLS Propiedades',
  description:
    'Crear grupo - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <CrearUsuario />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
