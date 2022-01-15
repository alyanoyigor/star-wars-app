import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const IconDrop = () => {
	return (
		<span
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginLeft: '5px',
			}}
		>
			<ArrowDropUpIcon id='arrow-drop-up' />
			<ArrowDropDownIcon id='arrow-drop-down' />
		</span>
	);
};