import React from 'react';
import { Button } from 'antd';

interface buttonProperty {
	label: string;
	onClick(): void;
	key?: string;
	type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
}

const StyledButton = ({ label, onClick, key, type }: buttonProperty): JSX.Element => (
	<Button key={key} onClick={onClick} type={type}>
		{label}
	</Button>
);

export default StyledButton;
