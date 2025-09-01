import "../../styles/HomeSection.css"
import CanvasWithOverlay from "./CanvasWithOverlay"

const HomeSection = ({ref}) => {
    return (
        <div ref={ref} id="home-section">
            <CanvasWithOverlay />
        </div>
    )
}

export default HomeSection