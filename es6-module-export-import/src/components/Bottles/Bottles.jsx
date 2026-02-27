import { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);

    const [cart, setCart] = useState([]);

    const addToCart = (bottle) => {
        console.log("cart added", bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h2>Bottles here: {bottles.length}</h2>
            <h3>Added Cart: {cart.length}</h3>
            <div className="bottles-container">
                {
                    bottles.map(bottle =>
                        <Bottle Bottle bottle={bottle} key={bottle.id} addToCart={addToCart} ></Bottle>
                    )
                }
            </div>
        </div >
    );
};

export default Bottles;