import React, { useEffect, useState } from "react";
import "./cart.css";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromCart } from "../../redux/actions/cartItem";

export default function () {
  const { cartListItems = [] } = useSelector((state) => state.loginData);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(50);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
    let sum = 0;
    cartListItems &&
      cartListItems.forEach((element) => {
        sum +=
          element.price - Math.round((element.price * element.discount) / 100);
      });
    setTotalDiscountedPrice(sum);
  }, [cartListItems]);
  console.log(cartListItems, "cartItems");

  return (
    <>
      {cartListItems.length > 0 ? (
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "#d2c9ff" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 text-muted">
                              {cartListItems.length} items
                            </h6>
                          </div>
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-5 col-lg-5 col-xl-5">
                              Product Details
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 offset-lg-1">
                              <h6 className="mb-0">Discounted Price</h6>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <h6 className="mb-0">Delete From Cart</h6>
                            </div>
                          </div>
                          <hr className="my-4" />
                          {cartListItems &&
                            cartListItems.map((items, index) => (
                              <>
                                <div
                                  className="row mb-4 d-flex justify-content-between align-items-center"
                                  key={index + "cartItems"}
                                >
                                  <div
                                    className="col-md-2 col-lg-2 col-xl-2"
                                    onClick={() => {
                                      navigate("/product?title=" + items.title);
                                    }}
                                  >
                                    <img
                                      src={items.imgUrl}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-muted">
                                      {items.title}
                                    </h6>
                                    <h6 className="text-black mb-0">
                                      {items.author}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3 offset-lg-1">
                                    <h6 className="mb-0">
                                      Rs.{" "}
                                      {items.price -
                                        Math.round(
                                          (items.price * items.discount) / 100
                                        )}
                                    </h6>
                                    <h6 className="mb-0 totalPrice">
                                      Rs. {items.price}
                                    </h6>
                                  </div>
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                              <button className="mb-0" onClick={()=>dispatch(deleteFromCart(items))}>Delete </button>
                            </div>
                                </div>

                                <hr className="my-4" />
                              </>
                            ))}

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="/homepage" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                Back to shop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">
                              {cartListItems.length} items
                            </h5>
                            <h5>Rs. {totalDiscountedPrice}</h5>
                          </div>

                          <h5 className="text-uppercase mb-3">Shipping</h5>

                          <div className="mb-4 pb-2">
                            <select
                              className="select"
                              onChange={(e) =>
                                setDeliveryCharge(e.target.value)
                              }
                            >
                              <option value="50">
                                Standard-Delivery - Rs. 50
                              </option>
                              <option value="100">Two Days - Rs. 100</option>
                              <option value="40">Three Days - Rs. 40</option>
                              <option value="0">
                                Four Days- Free Delivery
                              </option>
                            </select>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total price</h5>
                            <h5>
                              {totalDiscountedPrice + Number(deliveryCharge)}
                            </h5>
                          </div>

                          <button
                            type="button"
                            className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <div>No items Found</div>
        </>
      )}
    </>
  );
}
