import dynamic from "next/dynamic";
import DetallePropiedad from "@/components/detalle-propiedad";

export const metadata = {
  title: 'MLS Propiedades',
  description:
    'MLS Propiedades',
}

const index = () => {
  return (
    <>
      <DetallePropiedad />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
