import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../components/organization/Header';
import Footer from '../components/organization/Footer';
import Sider from '../components/organization/Sider';

import 'antd/dist/antd.css';

const About = React.lazy(() => import('../components/template/About'));
const Dashboard = React.lazy(() => import('../components/template/Dashboard'));
const NoMatch = React.lazy(() => import('../components/template/NoMatch'));
const { Content } = Layout;

export default function router(): JSX.Element {
	return (
		<>
			<Header />
			<Layout>
				<Sider />
				<Layout>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 900,
						}}
					>
						<Routes>
							<Route
								index
								element={
									<div>
										<h2>Home</h2>
									</div>
								}
							/>
							<Route
								path="about"
								element={
									<React.Suspense fallback={<div>loading...</div>}>
										<About />
									</React.Suspense>
								}
							/>
							<Route
								path="dashboard/*"
								element={
									<React.Suspense fallback={<div>loading...</div>}>
										<Dashboard />
									</React.Suspense>
								}
							/>
							<Route path="*" element={<NoMatch />} />
						</Routes>
					</Content>
				</Layout>
			</Layout>
			<Footer />
		</>
	);
}
