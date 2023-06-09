import React from 'react'

const Commentfield = () => {
  return (
    <>
    <div className="row">
      
        <form className="form-inline">
          <div className="form-group">
          <div className="col-12">
            <label className="mr-2 input-field-lable" htmlFor="commentInput">Comment *</label>
            <textarea className="form-control custom-textarea" id="commentInput" required></textarea>
          </div>
          <div className="row my-3">
      <div className="col-md-6">
        <div className="form-group">
          <label className='input-field-lable' htmlFor="nameInput">Name *</label>
          <input type="text" id="nameInput" className="form-control custom-input-2" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label className='input-field-lable' htmlFor="emailInput">Email *</label>
          <input type="email" id="emailInput" className="form-control custom-input-2" />
        </div>
      </div>
    </div>
          </div>
        </form>
      
    </div>
      
    </>
  )
}

export default Commentfield
