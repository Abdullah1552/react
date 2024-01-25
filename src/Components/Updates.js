import React from 'react'
import { Table } from 'antd';
import loupe from '../Images/loupe.png'
function Updates() {
    const columns = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
            width: 150,
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        {
            title: 'Column 8',
            dataIndex: 'address',
            key: '8',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>View</a>,
        },
    ];
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward ${i}`,
              age: 32,
            address: `London Park no. ${i}`,
        });
    }
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Check for Service updates</h1>
                <p style={{ color: 'black' }}>All About updates will be here.</p>
                <div className="search">
                    <img src={loupe} alt="" />
                    <input type="text" placeholder='Search Here' />
                    <button>Search</button>
                </div>
                <Table style={{ marginTop: '5%' }}
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1500,
                        y: 300,
                    }}
                />
            </section>
        </>
    )
}

export default Updates