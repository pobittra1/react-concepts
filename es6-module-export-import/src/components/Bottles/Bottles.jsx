import { use } from "react";

const Bottles = ({ bottlesPromise }) => {

    const bottlesData = use(bottlesPromise);
    console.log(bottlesData);
    return (
        <div>

        </div>
    );
};

export default Bottles;