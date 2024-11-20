const CheckBoxFilter = () => {
    return (
      <>  
<div className="row">
  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck1" />
          <label className="form-check-label" htmlFor="customCheck1">Seguridad privada</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck2" />
          <label className="form-check-label" htmlFor="customCheck2">Llave de acceso electrónica</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck3" />
          <label className="form-check-label" htmlFor="customCheck3">Barrio abierto con vigilancia</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck4" />
          <label className="form-check-label" htmlFor="customCheck4">Barrio cerrado</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck5" />
          <label className="form-check-label" htmlFor="customCheck5">Cámara de vigilancia</label>
        </div>
      </li>
    </ul>
  </div>
</div>

</>
  );
};

export default CheckBoxFilter;
