import dynamic from "next/dynamic";
import PropiedadDetalles from "@/components/propiedad-detalles";

export const metadata = {
  title: 'Agent Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <PropiedadDetalles />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
