import LogOut from './LogOut'
import Panels from './Panels'

function Header({ handleSession }) {
    return (
        <header className="toolbar">
            <div className="sections">
                <div className="section-container">
                    <Panels />
                    <LogOut handleSession={handleSession} />
                </div>
            </div>
        </header>
    )
}

export default Header