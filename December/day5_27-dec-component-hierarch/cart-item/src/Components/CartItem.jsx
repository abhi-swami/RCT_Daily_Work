import LabelPrice from "./LabelPrice"
import Quantity from "./Quantity"

export default  function CartItem({id,label,price,quantity,handleChange}){
    return(
        <div>
            <LabelPrice label={label} price={price}/>
            <Quantity
            id={id}
            quantity={quantity}
            handleChange={handleChange}
            />
        </div>
    )
}