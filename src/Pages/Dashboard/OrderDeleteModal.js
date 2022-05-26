import React from 'react';

const OrderDeleteModal = ({productDelete, setProductDelete,orders, setOrder}) => {
const {_id,price, paid, productName} = productDelete;
    const handleDelete = () =>{
       
            const url = `https://secure-anchorage-88576.herokuapp.com/order/${_id}`;
            fetch(url , {
                method: "DELETE",
              }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount >0 ){
                       const reaminingData = orders.filter(order => order._id !==_id);
                       setOrder(reaminingData)
                       setProductDelete(null)
                    }
                })
             
        }
    return (
        <div>
           

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{productName}</h3>
    <p class="py-4">Are You Sure Delete This Item!</p>
    <div class="modal-action">
    {(price && !paid) && <button className="btn bg-yellow-500 mx-2 text-red-500" onClick={handleDelete}>Delete</button>}
      <label for="my-modal-6" class="btn">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default OrderDeleteModal;