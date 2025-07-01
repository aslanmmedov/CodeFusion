import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'CustomerId',
        dataIndex: 'customerId',
        key: 'customerId',
        render: text => <a>{text}</a>,
    },
    {
        title: 'RoomId',
        dataIndex: 'roomId',
        key: 'roomId',
    },
    {
        title: 'CheckIndDate',
        dataIndex: 'checkindate',
        key: 'checkindate',
    },
    {
        title: 'CheckOutDate',
        dataIndex: 'checkoutdate',
        key: 'checkoutdate',
    }


];
const data = [
    {
        key: '1',
        customerId: 'Room1',
        roomId: 32,
        checkindate: 'New York No. 1 Lake Park',
        checkoutdate: '10.05.2023',
    },
    {
        key: '2',
        customerId: 'Room1',
        roomId: 32,
        checkindate: 'New York No. 1 Lake Park',
        checkoutdate: '10.05.2023',
    },
    {
        key: '3',
        customerId: 'Room1',
        roomId: 32,
        checkindate: 'New York No. 1 Lake Park',
        checkoutdate: '10.05.2023',
    },
];
const MyRezervations = () => <Table columns={columns} dataSource={data} />;
export default MyRezervations;