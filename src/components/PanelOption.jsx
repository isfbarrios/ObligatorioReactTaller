import Button from 'react-bootstrap/Button';

function PanelOption({ panelId, title }) {

    const handleSections = (e) => {
        console.log('e', e)
    }

    return (
        <Button key={panelId} variant="link" className="a-mod" onClick={handleSections}>{title}</Button>
    )
}

export default PanelOption