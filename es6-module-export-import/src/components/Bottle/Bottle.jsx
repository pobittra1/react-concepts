import "./Bottle.css"

const Bottle = ({ bottle, addToCart }) => {

    return (
        <div className="bottle">

            <img
                src={bottle.image}
                alt={bottle.name}
                className="bottle-img"
            />

            <h3 className="bottle-name">{bottle.name}</h3>

            <p className="bottle-brand">
                Brand: {bottle.brand}
            </p>

            <p className="bottle-desc">
                {bottle.description}
            </p>

            <div className="bottle-info">
                <span className="bottle-price">
                    ৳ {bottle.finalPrice}
                </span>

                <span className="bottle-rating">
                    ⭐ {bottle.rating}
                </span>
            </div>

            <button className="add-btn" onClick={() => addToCart(bottle)}>
                Add To Cart
            </button>

        </div>
    );
};

export default Bottle;