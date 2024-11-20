import dynamic from "next/dynamic";
import EditarNovedad from "@/components/dashboard/editar-novedad";

export const metadata = {
  title: 'Editar novedad || MLS Propiedades',
  description:
    'Editar novedad - MLS Propiedades',
}

const Page = ({ params }) => {
  const { id } = params; // Captura el ID de la novedad desde los parámetros de la URL

  return (
    <EditarNovedad id={id} />
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
