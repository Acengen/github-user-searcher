import React from "react";

const AlertSubmit = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert bg-${alert.type}`}>
        <p>
          <i className="fa fa-warning"></i> {alert.msg}
        </p>
      </div>
    )
  );
};

export default AlertSubmit;
