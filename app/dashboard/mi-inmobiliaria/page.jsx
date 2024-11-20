import dynamic from "next/dynamic";
import MiInmobiliaria from "@/components/dashboard/mi-inmobiliaria";

export const metadata = {
  title: 'Mi inmobiliaria || MLS Propiedades',
  description:
    'Mi inmobiliaria - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <MiInmobiliaria />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
