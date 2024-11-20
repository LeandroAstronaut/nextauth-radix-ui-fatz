import CheckBoxFilter from "../../common/CheckBoxFilter";
import AmbientesCheckboxes from "./AmbientesCheckboxes";
import SeguridadCheckboxes from "./SeguridadCheckboxes";
import ComodidadesCheckboxes from "./ComodidadesCheckboxes";
import CondicionesEspecialesCheckboxes from "./CondicionesEspecialesCheckboxes";
import CondicionesEspecialesCamposCheckboxes from "./CondicionesEspecialesCamposCheckboxes";
import AptitudesCheckboxes from "./AptitudesCheckboxes";
import ServiciosCheckboxes from "./ServiciosCheckboxes";

const DetailedInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Tokko Id</label>
          <input type="text" className="form-control" id="propertyId" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Dormitorios</label>
          <input type="text" className="form-control" id="propertyASize" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Ambientes</label>
          <input type="text" className="form-control" id="landArea" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">Cocheras</label>
          <input type="text" className="form-control" id="bedRooms" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">Baños</label>
          <input type="text" className="form-control" id="bathRooms" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Antiguedad</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">A estrenar</option>
            <option data-tokens="Type2">E construcción</option>            
            <option data-tokens="Type3">Años antiguedad</option>
          </select>
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Año</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Mejoras</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Transporte</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Pisos</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Techo</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">Teja</option>
            <option data-tokens="Type2">Loza</option>            
            <option data-tokens="Type3">Chapa</option>
          </select>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Estado emprendimiento</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="type1">En construcción</option>
            <option data-tokens="Type2">En pozo</option>            
            <option data-tokens="Type3">Terminado</option>
          </select>
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Fecha entrega</label>
          <input type="text" className="form-control" id="yearBuild" />
        </div>
      </div>


      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Ambientes</h4>
      </div>
      <AmbientesCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Seguridad</h4>
      </div>
      <SeguridadCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Comodidades y equipamiento</h4>
      </div>
      <ComodidadesCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Condiciones especiales</h4>
      </div>
      <CondicionesEspecialesCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Condiciones esp. loteo campos</h4>
      </div>
      <CondicionesEspecialesCamposCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Aptitudes</h4>
      </div>
      <AptitudesCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Servicios</h4>
      </div>
      <ServiciosCheckboxes />

      <div className="col-xl-12 mt-4">
        <h4 className="mb20">Servicios en desarrollo</h4>
      </div>
      <ServiciosCheckboxes />

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
