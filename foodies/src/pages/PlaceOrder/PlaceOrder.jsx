import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { calculateCartTotals } from '../../util/CartUtils';

const PlaceOrder = () => {
    const { foodList, quantities, setQuantities } = useContext(StoreContext);

    const cartItems = foodList.filter(food => quantities[food.id] > 0);

  const{subtotal,shipping,tax,total} = calculateCartTotals(cartItems,quantities);


    return (
        <div className="container my-5 mt-2">
            <div className="py-5 text-center">
                <img className="d-block mx-auto"
                    src={assets.logo} alt="" width="98" height="98" />
            </div>

            <div className="row g-5">
                {/* Cart Summary */}
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                    </h4>

                    <ul className="list-group mb-3">
                        {cartItems.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{item.name}</h6>
                                    <strong className="text-body-secondary">Qty:{quantities[item.id]}</strong>
                                </div>
                                <strong className="text-body-secondary">₹{item.price * quantities[item.id]}</strong>
                            </li>
                        ))}

                        <li className="list-group-item d-flex justify-content-between">
                            <strong> Shipping</strong>
                            <strong className="text-body-secondary">₹{subtotal === 0 ? 0.0 : shipping.toFixed(2)}
                            </strong>
                        </li>

                        <li className="list-group-item d-flex justify-content-between ">
                            <strong> Tax</strong>
                            <strong className="text-body-secondary">₹{tax.toFixed(2)}</strong>
                        </li>

                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Total (INR)</strong>
                            <strong>₹{total.toFixed(2)}</strong>
                        </li>

                    </ul>
                </div>

                {/* Billing & Payment Form */}
                <div className="col-md-7 col-lg-8">
                    <h2 className="mb-4">Billing & Payment</h2>
                    <form>
                        {/* Billing Address */}
                        <h4 className="mb-3">Billing address</h4>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Jhon" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="phone" placeholder="9763228798" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>India</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="number" className="form-control" id="zip" placeholder="416413" required />
                            </div>
                            <div className="col-12">

                            </div>
                        </div>
                        <hr className="my-4" />
                        <button className="btn btn-primary btn-lg" type="submit" disabled={cartItems.length === 0}>
                            Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PlaceOrder;
