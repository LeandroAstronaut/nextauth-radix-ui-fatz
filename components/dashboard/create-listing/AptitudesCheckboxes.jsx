const CheckBoxFilter = () => {
    return (
      <>  
<div className="row">
  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck1" />
          <label className="form-check-label" htmlFor="customCheck1">Agrícola</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck2" />
          <label className="form-check-label" htmlFor="customCheck2">Ganadero</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck3" />
          <label className="form-check-label" htmlFor="customCheck3">Mixto</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck4" />
          <label className="form-check-label" htmlFor="customCheck4">Recreativo</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck5" />
          <label className="form-check-label" htmlFor="customCheck5">Forestal</label>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="row">
  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck6" />
          <label className="form-check-label" htmlFor="customCheck6">Otra Aptitud</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck7" />
          <label className="form-check-label" htmlFor="customCheck7">Apto desarrollo urbanístico</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck8" />
          <label className="form-check-label" htmlFor="customCheck8">Loteos</label>
        </div>
      </li>
    </ul>
  </div>

  <div className="col-xxs-6 col-sm col-lg col-xl">
    <ul className="ui_kit_checkbox selectable-list">
      <li>
        <div className="form-check custom-checkbox">
          <input type="checkbox" className="form-check-input" id="customCheck9" />
          <label className="form-check-label" htmlFor="customCheck9">Turístico</label>
        </div>
      </li>
    </ul>
  </div>

  {/* Espacio vacío para completar 5 columnas */}
  <div className="col-xxs-6 col-sm col-lg col-xl"></div>
</div>
</>
  );
};

export default CheckBoxFilter;
