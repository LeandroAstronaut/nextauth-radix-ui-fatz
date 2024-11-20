const DatosMonearios = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="calle">Precio</label>
          <input type="text" className="form-control" id="calle" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="altura">Precio oferta</label>
          <input type="text" className="form-control" id="altura" />
        </div>
      </div>
      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Moneda</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Argentina">Pesos</option>            
            <option data-tokens="Brasil">Dólares</option>
            <option data-tokens="Uruguay">Euros</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="altura">Expensas</label>
          <input type="text" className="form-control" id="altura" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Moneda Expensas</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Argentina">Pesos</option>            
            <option data-tokens="Brasil">Dólares</option>
            <option data-tokens="Uruguay">Euros</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="altura">Valor hectárea</label>
          <input type="text" className="form-control" id="altura" />
        </div>
      </div>

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Moneda valor hectárea</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Argentina">Pesos</option>            
            <option data-tokens="Brasil">Dólares</option>
            <option data-tokens="Uruguay">Euros</option>
          </select>
        </div>
      </div>


      <div className="col-lg-4">
      <div className="my_profile_setting_input ui_kit_select_search form-group">        
        <label>Crédito</label>               
        <div className="form-check custom-checkbox">   
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck1"
          />
          <label className="form-check-label" htmlFor="customCheck1">
            Apto crédito
          </label>
        </div>
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

export default DatosMonearios;
