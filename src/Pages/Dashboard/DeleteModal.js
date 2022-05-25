import React from 'react';

const DeleteModal = ({productDelete, setTools, tools,setProductDelete}) => {
    const {name, _id } = productDelete;

    const deleteTools =() =>{
       
            const url = `http://localhost:5000/parts/${_id}`;
            fetch(url , {
                method: "DELETE",
              }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount >0 ){
                       const reaminingData = tools.filter(computer => computer._id !==_id);
                       setTools(reaminingData)
                       setProductDelete(null)
                    }
                })
             
     
     }
    return (
        <div>
   

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{name}</h3>
    <p class="py-4">Are You Sure Deleteting This Product!</p>
    <div class="modal-action">
    <button onClick={ deleteTools} class="btn btn-primary">Delete</button>
      <label for="my-modal-6" class="btn">Cancel</label>
    </div>
  </div>
</div>

        </div>
    );
};

export default DeleteModal;