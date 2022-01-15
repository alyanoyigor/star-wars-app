import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconDropWrapper } from './styles';

export const IconDrop = () => {
	return (
		<IconDropWrapper>
			<ArrowDropUpIcon id='arrow-drop-up' />
			<ArrowDropDownIcon id='arrow-drop-down' />
		</IconDropWrapper>
	);
};
