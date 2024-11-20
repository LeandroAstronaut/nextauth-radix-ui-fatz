import ContactWithAgent from "../../components/common/agent-view/ContactWithAgent";
import Categorie from "../../components/common/listing/Categorie";
import FeaturedListings from "../../components/common/listing/FeaturedListings";
import FeatureProperties from "../../components/common/listing/FeatureProperties";

const SidebarListings = () => {
  return (
    <div className="sidebar_listing_grid1">

<div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">Información general</h4>
          <ul className="prop_details mb0">
            <li>
              <a href="#">Office: 134 456 3210</a>
            </li>
            <li>
              <a href="#">Mobile: 891 456 9874</a>
            </li>
            <li>
              <a href="#">Fax: 342 654 1258</a>
            </li>
            <li>
              <a href="#">Email: pakulla@findhouse.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">Mensaje</h4>
          <ContactWithAgent />
        </div>
      </div>
      {/* End filter and search area */}

      <div className="terms_condition_widget style_two-pro">
        <h4 className="title">Propiedades destacadas</h4>
        <FeatureProperties />
      </div>
      {/* End Featured Properties widget */}

      <div className="terms_condition_widget">
        <h4 className="title">Inmobiliarias</h4>
        <div className="widget_list">
          <ul className="list_details">
            <Categorie />
          </ul>
        </div>
      </div>
      {/* End Categories Property widget */}

      <div className="sidebar_feature_listing">
        <h4 className="title">Últimas entradas</h4>
        <FeaturedListings />
      </div>
      {/* End Recently Viewed widget */}
    </div>
  );
};

export default SidebarListings;
