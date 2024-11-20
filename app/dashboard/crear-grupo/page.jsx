import dynamic from "next/dynamic";
import CrearGrupo from "@/components/dashboard/crear-grupo/CrearGrupo";

export const metadata = {
  title: 'Crear grupo || MLS Propiedades',
  description:
    'Crear grupo - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <CrearGrupo />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
