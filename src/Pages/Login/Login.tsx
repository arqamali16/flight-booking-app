import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const history = useHistory();

	const onClick = () => {
		history.push('/search');
	};

	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className='logo' />
			</Header>
			<Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
				<div className='site-layout-background' style={{ padding: 24, minHeight: '90vh', margin: 'auto' }}>
					<Row gutter={[16, 16]} align='middle' justify='space-around'>
						<Col span={24}>
							<Button type='primary' onClick={onClick} style={{ width: '100%' }}>
								Click here to search for Flights
							</Button>
						</Col>
					</Row>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Mohammed Arqam Ali (arqam.ali16@gmail.com)</Footer>
		</Layout>
	);
};

export default Search;
