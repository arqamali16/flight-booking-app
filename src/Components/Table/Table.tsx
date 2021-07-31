import React from 'react';
import { Table } from 'antd';

import { columns } from '../../Contants/countries';

const CustomTable = (props: any) => {
	const { flights } = props;
	return <Table dataSource={flights} columns={columns} pagination={false} />;
};

export default CustomTable;
