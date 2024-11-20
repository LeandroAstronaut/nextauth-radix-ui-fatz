import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Información de contacto</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis
        libero eleifend ornare. habitasse platea dictumst.
      </p>
      <div className="content_list">
        <h5>Nuestra oficina</h5>
        <p>
          2301 Ravenswood Rd Madison, <br />
          San Pedro (BA)
        </p>
      </div>
      <div className="content_list">
        <h5>Teléfono</h5>
        <p>(315) 905-2321</p>
      </div>
      <div className="content_list">
        <h5>Email</h5>
        <p>info@mlspropiedades.com</p>
      </div>
      <div className="content_list">
        <h5>Whatsapp</h5>
        <p>(315) 905-2321</p>
      </div>
      <h5>Redes</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
