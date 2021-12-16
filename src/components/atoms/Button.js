import react from 'react';
import { Button } from 'antd';

const StyledButton = ({ label, onClick, key, type }) => (
	<Button key={key} onClick={onClick} type={type}>
		{label}
	</Button>
);

export default StyledButton;
