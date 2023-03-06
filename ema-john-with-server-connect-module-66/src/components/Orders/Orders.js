import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import Order from "../Order/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container mt-5">
      <h2>You've placed: {orders.length} orders!</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {orders.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </div>
    </div>
  );
};

export default Orders;
