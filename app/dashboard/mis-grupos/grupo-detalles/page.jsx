import dynamic from "next/dynamic";
//import AgencyDetails from "@/components/agency-details";
import GrupoDetalles from "@/components/grupo-detalles";

export const metadata = {
  title: 'Agency Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <GrupoDetalles />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
