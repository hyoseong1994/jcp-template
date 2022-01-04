import React from 'react';
import Button from 'components/atoms/Button';
import { PageHeader } from 'antd';

const Header = (): JSX.Element => (
	<PageHeader
		className="site-page-header"
		onBack={() => window.history.back()}
		title="Title"
		subTitle="This is a subtitle"
		extra={[
			<Button key="1" id="first" label="Operation" onClick={() => {}} />,
			<Button key="2" id="second" label="Operation" onClick={() => {}} />,
			<Button key="3" id="third" label="Primary" onClick={() => {}} type="primary" />,
		]}
	/>
);
export default Header;
