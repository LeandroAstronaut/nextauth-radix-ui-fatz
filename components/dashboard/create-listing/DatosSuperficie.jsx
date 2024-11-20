const DatosSuperficie = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="calle">Sup. cubierta</label>
          <input type="text" className="form-control" id="calle" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="altura">Sup. total</label>
          <input type="text" className="form-control" id="altura" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="piso">Sup. balcón</label>
          <input type="text" className="form-control" id="piso" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="departamento">Sup. descubierta</label>
          <input type="text" className="form-control" id="departamento" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyCity">Frente terreno</label>
          <input type="text" className="form-control" id="propertyCity" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="neighborHood">Largo terreno</label>
          <input type="text" className="form-control" id="neighborHood" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Unidad superficie</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Argentina">Metros</option>            
            <option data-tokens="Brasil">Hectáreas</option>
            <option data-tokens="Uruguay">Kilómetros</option>
          </select>
        </div>
      </div>

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

export default DatosSuperficie;
