import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

const StyledLayout = (): JSX.Element => (
	<Sider>
		<Menu
			mode="inline"
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			style={{ height: '100%', borderRight: 0, width: 200 }}
		>
			<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
				<Menu.Item key="1">
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/about">About</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/dashboard/messages">Messages (Dashboard)</Link>
				</Menu.Item>
				<Menu.Item key="4">option4</Menu.Item>
			</SubMenu>
			<SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
				<Menu.Item key="5">option5</Menu.Item>
				<Menu.Item key="6">option6</Menu.Item>
				<Menu.Item key="7">option7</Menu.Item>
				<Menu.Item key="8">option8</Menu.Item>
			</SubMenu>
		</Menu>
		<Outlet />
	</Sider>
);
export default StyledLayout;
