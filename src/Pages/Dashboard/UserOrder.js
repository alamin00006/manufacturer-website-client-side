import React from 'react';

const UserOrder = ({order, index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{order.customerName}</td>
        <td>{order.customer}</td>
        <td>{order.productName}</td>
        <td>{order.price}</td>
      </tr>
    );
};

export default UserOrder;