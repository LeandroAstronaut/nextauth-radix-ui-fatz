
const DetailedInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Nombre propietario</label>
          <input type="text" className="form-control" id="propertyId" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Apellido propietario</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Teléfono propietario</label>
          <input type="text" className="form-control" id="landArea" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">Volver</button>
          <button className="btn btn2 float-end">Guardar</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
