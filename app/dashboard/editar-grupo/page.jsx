import dynamic from "next/dynamic";
import EditarGrupo from "@/components/dashboard/editar-grupo";

export const metadata = {
  title: 'Editar grupo || MLS Propiedades',
  description:
    'Editar grupo - MLS Propiedades',
}

const index = () => {
  return (
    <>
      <EditarGrupo />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
