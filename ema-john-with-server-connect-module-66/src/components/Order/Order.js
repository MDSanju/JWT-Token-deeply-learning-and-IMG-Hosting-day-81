import React from "react";

const Order = (props) => {
  const { name, email, address } = props.order;
  return (
    <div>
      <div className="col">
        <div className="card text-dark bg-info">
          <div className="card-header fw-bold">Pending</div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{address}</p>
            <p className="card-text">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
