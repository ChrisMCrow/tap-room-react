import React from 'react';

function AddForm() {
  return(
    <div>
      <form>
        <input type='text' className='form-control mb-2' placeholder='name'/>
        <input type="text" class="form-control mb-2" name="brand" placeholder="Brand" />
        <input type="number" class="form-control mb-2" name="price" placeholder="Price" />
        <input type="number" class="form-control mb-2" name="alcoholContent" placeholder="Alcohol Content" />
        <button class="btn">Add</button>
        <button class="btn">Cancel</button>
      </form>
    </div>
  );
}

export default AddForm;