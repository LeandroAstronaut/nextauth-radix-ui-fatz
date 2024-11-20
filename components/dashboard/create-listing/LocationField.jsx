const LocationField = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="calle">Calle</label>
          <input type="text" className="form-control" id="calle" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="altura">Altura</label>
          <input type="text" className="form-control" id="altura" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="piso">Piso</label>
          <input type="text" className="form-control" id="piso" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="departamento">Departamento</label>
          <input type="text" className="form-control" id="departamento" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyCity">Localidad</label>
          <input type="text" className="form-control" id="propertyCity" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="neighborHood">Barrio</label>
          <input type="text" className="form-control" id="neighborHood" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="zipCode">Código postal</label>
          <input type="text" className="form-control" id="zipCode" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Provincia</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Santa Fe">Santa Fe</option>            
            <option data-tokens="Buenos Aires">Buenos Aires</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>País</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Argentina">Argentina</option>            
            <option data-tokens="Brasil">Brasil</option>
            <option data-tokens="Uruguay">Uruguay</option>
            <option data-tokens="Paraguay">Paraguay</option>
            <option data-tokens="Chile">Chile</option>
            <option data-tokens="Bolivia">Bolivia</option>
            <option data-tokens="Peru">Peru</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="disposicion">Disposición</label>
          <input type="text" className="form-control" id="disposicion" />
        </div>
      </div>
      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="orientacion">Orientación</label>
          <input type="text" className="form-control" id="orientacion" />
        </div>
      </div>
      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="latitud">Latitud</label>
          <input type="text" className="form-control" id="latitud" />
        </div>
      </div>
      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="longitud">Longitud</label>
          <input type="text" className="form-control" id="longitud" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Acceso</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Asfalto">Asfalto</option>            
            <option data-tokens="Tierra">Tierra</option>
            <option data-tokens="Rio">Rio</option>
            <option data-tokens="Aire">Aire</option>
            <option data-tokens="Ripio">Ripio</option>
            <option data-tokens="Tosca">Tosca</option>
          </select>
        </div>
      </div>

      {/* End .col */}

      {/* End .col */}

      {/*<div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <div className="h400 bdrs8" id="map-canvas">
            <div className="gmap_canvas pe-none">
              <iframe
                title="map"
                className="gmap_iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.721472711!2d-115.31508339643749!3d36.12519578053308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1669000531244!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </div>*/}
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Volver</button>
          <button className="btn btn2 float-end">Guardar</button>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default LocationField;
