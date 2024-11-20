import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = () => {
  return (
    <>
    <div className="row">
      <CheckBoxFilter />
    </div>

    <div className="row mt-5">

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Notas red</label>
          <input type="text" className="form-control" id="propertyId" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Notas aut. venta</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Situación y avances</label>
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
  </>
  );
};

export default DetailedInfo;
