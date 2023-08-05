import HomeLogo from "./HomeLogo"
import PanelOption from "./PanelOption"

function Panels() {
    return (
        <div className="panels d-flex align-items-center">
            <HomeLogo />
            <PanelOption panelId="addPerson" title="Nuevo censo" path="nuevo-censo" />
        </div>
    )
}

export default Panels