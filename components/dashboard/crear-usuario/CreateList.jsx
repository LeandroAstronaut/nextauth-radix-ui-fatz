const CreateList = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Nombre</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Apellido</label>
          <input type="text" className="form-control" id="propertyTitle" />
        </div>
      </div>

      <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExampleEmail">Email</label>
              <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleEmail"
                  placeholder="creativelayers@gmail.com"
              />
          </div>
      </div>

      <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExampleInput8">Teléfono</label>
              <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput8"
              />
          </div>
      </div>

      <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExampleInput6">Fecha de nacimiento</label>
              <input
                  type="date"
                  className="form-control"
                  id="formGroupExampleInput6"
              />
          </div>
      </div>

      <div className="col-lg-6 col-xl-6"></div>
      
      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleNewPass">Contraseña</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleNewPass"
          />
        </div>
      </div>

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleConfPass">
            Confirmar contraseña
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleConfPass"
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12 mb-5">
        <div className="my_profile_setting_input float-start fn-520">
          <button className="btn btn3 btn-dark">Copiar contraseña</button>
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
