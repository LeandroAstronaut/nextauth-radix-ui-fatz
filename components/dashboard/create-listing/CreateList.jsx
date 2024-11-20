const CreateList = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Título</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Descripción</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Descripción larga</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="4"
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Tipo Operación</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Venta</option>
            <option data-tokens="Type2">Alquiler</option>
            <option data-tokens="Type3">Temporada</option>
            <option data-tokens="Type4">Emprendimiento</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Tipo propiedad</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Departamento</option>
            <option data-tokens="Status2">Casa</option>
            <option data-tokens="Status3">Campo</option>
            <option data-tokens="Status4">Chacra</option>
            <option data-tokens="Status5">Consultorio</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Subtipo propiedad</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">Apart estudio</option>
            <option data-tokens="Status2">Estadar</option>
            <option data-tokens="Status3">Duplex</option>
            <option data-tokens="Status4">Loft</option>
            <option data-tokens="Status5">Monoambiente</option>
          </select>
        </div>
      </div>

      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="condicion">Condición</label>
          <input
            type="text"
            className="form-control"
            id="condicion"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="situacion">Situación</label>
          <input
            type="text"
            className="form-control"
            id="situacion"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Dormitorios</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Otro</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Volver</button>
          <button className="btn btn2 float-end">Guardar</button>
        </div>
      </div>
    </>
  );
};

export default CreateList;
