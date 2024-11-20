import dynamic from "next/dynamic";
import MisClientes from "@/components/dashboard/mis-clientes";

export const metadata = {
  title: 'Mis clientes || MLS Propiedades',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MisClientes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
