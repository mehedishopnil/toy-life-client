import React from 'react';
import { Link } from 'react-router-dom';

const AddedAToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
    
    }
    return (
        <div>
            <div className=" hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center pb-8 ">
            <h1 className="text-5xl font-bold">Add a Toy Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md xl:w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleAddToy} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="toy name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="input toy category"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="input product price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="input product rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="input product rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="input product rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="input your photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-[#94c120] hover:bg-[#82ab19]"
                  type="submit"
                  value="Add A Toy"
                />
              </div>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddedAToy;