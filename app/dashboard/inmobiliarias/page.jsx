import dynamic from "next/dynamic";
import Inmobiliarias from "@/components/dashboard/inmobiliarias";

export const metadata = {
  title: 'Inmobiliarias || MLS Propiedades',
  description:
    'Inmobiliarias - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <Inmobiliarias />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
