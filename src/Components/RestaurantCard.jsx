import { IMAGE_CDN } from "../utils/constants";

const RestaurantCard = (props) => {

    const {data} = props
    debugger
    const imageUrl = `${IMAGE_CDN}/${data.info.cloudinaryImageId}`;
    console.log(imageUrl, 'imageUrl', data.info.cloudinaryImageId)
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src={imageUrl} alt="restaurant"/>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-name">
                    <p>{data.info.name}</p>
                </div>
                <div className="restaurant-rating">
                    <p>4.5</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;