import dynamic from "next/dynamic";
import CrearNovedad from "@/components/dashboard/crear-novedad";

export const metadata = {
  title: 'Crear novedad || MLS Propiedades',
  description:
    'Crear novedad - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <CrearNovedad />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
