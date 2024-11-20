import dynamic from "next/dynamic";
import MisPropiedades from "@/components/dashboard/mis-propiedades";

export const metadata = {
  title: 'Mis Propiedades - MLS Propiedades',
  description:
    'Mis Propiedades - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <MisPropiedades />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
