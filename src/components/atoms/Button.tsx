import React from 'react';
import { Button } from 'antd';

interface buttonProperty {
	label: string;
	onClick(): void;
	id: string;
	type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
}

const StyledButton = ({ id, onClick, type, label }: buttonProperty): JSX.Element => {
	return (
		<Button key={id} onClick={onClick} type={type}>
			{label}
		</Button>
	);
};

export default React.memo(StyledButton);
