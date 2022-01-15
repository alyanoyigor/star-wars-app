import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from './styles';
import SearchIcon from '@mui/icons-material/Search';

export const SearchTableBar = ({ search, setSearch }) => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				onChange={(e) => setSearch(e.target.value)}
				value={search}
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
};
