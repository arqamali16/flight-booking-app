import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import Table from '../../Components/Table';
import Form from '../../Components/Form';

const Search = (props: any) => {
	const { flights, getFlights } = props;
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className='logo' />
			</Header>
			<Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
				<div className='site-layout-background' style={{ padding: 24, minHeight: '90vh' }}>
					<Row gutter={[16, 16]}>
						<Col span={24}>
							<Form getFlights={getFlights} />
						</Col>
						<Col span={24}>
							<Table flights={flights} />
						</Col>
					</Row>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Mohammed Arqam Ali (arqam.ali16@gmail.com)</Footer>
		</Layout>
	);
};

export default Search;
