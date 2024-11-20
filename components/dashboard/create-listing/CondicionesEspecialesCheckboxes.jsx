const CheckBoxFilter = () => {
    return (
      <>  
<div className="row">
  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck1" />
          <label className="form-check-label" htmlFor="customCheck1">Admite mascotas</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck2" />
          <label className="form-check-label" htmlFor="customCheck2">Amoblado</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck3" />
          <label className="form-check-label" htmlFor="customCheck3">Apto profesional</label>
        </div>
      </li>
    </ul>
  </div>

  {/* Espacio vacío para completar 5 columnas */}
  <div className="col-xxs-6 col-sm col-lg col-xl"></div>
  <div className="col-xxs-6 col-sm col-lg col-xl"></div>
</div>

</>
  );
};

export default CheckBoxFilter;
