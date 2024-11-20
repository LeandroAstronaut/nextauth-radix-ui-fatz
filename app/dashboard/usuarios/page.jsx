import dynamic from "next/dynamic";
import Usuarios from "@/components/dashboard/usuarios";

export const metadata = {
  title: 'Usuarios || MLS Propiedades',
  description:
    'Usuarios - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <Usuarios />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
