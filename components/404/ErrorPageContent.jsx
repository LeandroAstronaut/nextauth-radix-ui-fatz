import Link from "next/link";
import Form from "./Form";
import Image from "next/image";

const ErrorPageContent = () => {
  return (
    <div className="error_page footer_apps_widget">
      <Image
        width={266}
        height={200}
        className="img-fluid img-thumb contain"
        src="/assets/images/resource/error.png"
        alt="error.png"
      />
      <div className="erro_code">
        <h1>Oops! Página no encontrada</h1>
      </div>
      <p>No podemos encontrar la página que estás buscando</p>

      {/*<Form />*/}
      {/* End form */}

      <Link href="/" className="btn btn_error btn-thm">
        Volver al inicio
      </Link>
    </div>
  );
};

export default ErrorPageContent;
