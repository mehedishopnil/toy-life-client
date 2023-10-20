import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const AddedAToy = () => {
  
  const [successful, setSuccessful] = useState(false);
  const {user} = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const [fromLocation, setFromLocation] = useState(location.state?.from);



    useEffect(() => {
      if (!fromLocation) {
        setFromLocation(location.state?.from);
      }
    }, [location.state?.from, fromLocation]);
    
  // const {displayName, email} = user;

  const handleAddToy = (event) => {
    event.preventDefault();
    if (!user) {
      // Redirect to login page if the user is not authenticated
      navigate("/login");
      return;
    }
    
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const photoURL = form.photoURL.value;
    const displayName = user.displayName;
    const email = user.email;

    const inputedProdutInfo = {
      displayName,
      email,
      
      name,
      category,
      price,
      rating,
      quantity,
      description,
      photoURL,
    };
    console.log(inputedProdutInfo);
    fetch("http://localhost:5000/usersProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputedProdutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setSuccessful(true);
          setTimeout(() => {
            setSuccessful(false);
          }, 5000); // Hide the success message after 5 seconds
          alert("Added Product Successfully");
          form.reset();
        }
      });
       // Redirect back to the previous page upon success
       navigate(fromLocation || "/");
  };

  return (
    <div>
      <div className=" hero min-h-screen py-10 bg-base-200">
        <div className="">
          <div className="text-center pb-8 ">
            <h1 className="text-4xl font-bold">Add a Toy Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md xl:w-[400px] shadow-xl bg-base-100">
            <form onSubmit={handleAddToy} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="quantity"
                  placeholder="input product rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
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

              <div>
                {successful ? (
                  <p className="text-[#94c120] text-center">
                    Successfully added a product
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedAToy;
