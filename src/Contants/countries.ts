const countries = [
	{
		name: 'Los Angeles (LAX)',
		key: 'LAX',
	},
	{
		name: 'Austin (AUS)',
		key: 'AUS',
	},
	{
		name: 'New York (NY)',
		key: 'NY',
	},
];

const columns: any = [
	{
		title: 'From',
		dataIndex: 'from',
		key: 'from',
	},
	{
		title: 'To',
		dataIndex: 'to',
		key: 'to',
	},
	{
		title: 'Arrival Date',
		dataIndex: 'Departure',
		key: 'Departure',
	},
	{
		title: 'Departure Date',
		dataIndex: 'Arrival',
		key: 'Arrival',
	},
	{
		title: 'Arrival Time',
		dataIndex: 'depTime',
		key: 'depTime',
	},
	{
		title: 'Arrival Time',
		dataIndex: 'arrTime',
		key: 'arrTime',
	},
];

export { countries, columns };
