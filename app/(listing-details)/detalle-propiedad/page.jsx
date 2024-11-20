import dynamic from "next/dynamic";
import DetallePropiedad from "@/components/detalle-propiedad";

export const metadata = {
  title: 'Agent Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <DetallePropiedad />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
