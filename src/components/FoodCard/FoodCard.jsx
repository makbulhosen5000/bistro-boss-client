import React, { useContext, useEffect } from "react";
import { authContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";




const FoodCard = ({ item }) => {
  const {name,image,price,recipe,_id} = item
  const { user } = useContext(authContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {orderId: _id, name,image, price, email:user.email}
        
       fetch("http://localhost:5000/carts", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(cartItem),
       })
         .then((res) => res.json())
         .then((data) => {
            refetch();
           if (data.insertedId) {
  
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Food Added Successfully!",
               showConfirmButton: false,
               timer: 1500,
             });
           }
         });
    } else {
      Swal.fire({
        title: "Please Login to order the Food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from:location}});
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={item ? item?.image : "Not Found"} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <h2 className="card-title">{item?.price}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
