import HomeLogo from "./HomeLogo"
import PanelOption from "./PanelOption"

function Panels() {
    return (
        <div className="panels d-flex align-items-center menu-panel">
            <HomeLogo />
            <PanelOption panelId="addPerson" title="Censos" path="censos" />
            <PanelOption panelId="graphics" title="Graficas" path="graficas" />
            <PanelOption panelId="maps" title="Mapa" path="maps" />
        </div>
    )
}

export default Panels