import { useNavigate } from "react-router-dom";
import "./menu-item.scss"



const MenuItem = (props) => {
    const navigate = useNavigate();
    const handleNavigate = (url) => {
        navigate(url);
    }
    const { title, imageUrl, id } = props.category;
    return (
        <div className="menu-item">
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="content" onClick={() => { handleNavigate(`/shop/${id}`) }}>
                <div className="title">{title.toUpperCase()}</div>
                <div className="subtitle"
                >Shop Now</div>
            </div>
        </div>
    )
}

export default MenuItem