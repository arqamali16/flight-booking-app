import React from 'react';
import { Form, Row, Col, DatePicker, Card, Select, Button } from 'antd';

import { countries } from '../../Contants/countries';
import { useForm } from 'antd/lib/form/Form';

const CustomForm = (props: any) => {
	const [form] = useForm();
	const { getFlights } = props;

	const onClick = () => {
		form.validateFields().then(() => {
			getFlights();
		});
	};

	return (
		<Form form={form}>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Card>
						<Row gutter={[16, 16]}>
							<Col span={5}>
								<Form.Item label='Source' name='source' key='source' rules={[{ required: true }]}>
									<Select showSearch showArrow={false}>
										{countries.map((ele) => (
											<Select.Option key={ele.key} value={ele.name}>
												{ele.name}
											</Select.Option>
										))}
									</Select>
								</Form.Item>
							</Col>
							<Col span={5}>
								<Form.Item
									label='Destination'
									name='destination'
									key='destination'
									rules={[{ required: true }]}
								>
									<Select showSearch showArrow={false}>
										{countries.map((ele) => (
											<Select.Option key={ele.key} value={ele.name}>
												{ele.name}
											</Select.Option>
										))}
									</Select>
								</Form.Item>
							</Col>
							<Col span={5}>
								<Form.Item
									label='Departure'
									name='departure'
									key='departure'
									rules={[{ required: true }]}
								>
									<DatePicker />
								</Form.Item>
							</Col>
							<Col span={5}>
								<Form.Item label='Return' name='return' key='return'>
									<DatePicker />
								</Form.Item>
							</Col>
							<Col span={4}>
								<Form.Item label='.'>
									<Button type='primary' onClick={onClick}>
										Search
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Form>
	);
};

export default CustomForm;
