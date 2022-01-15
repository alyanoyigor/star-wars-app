import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import {
	CharactersToolbar,
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from './styles';
import { IconDrop } from './components/IconDrop';

const SearchAppBar = ({ search, setSearch }) => {
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

function descendingComparator(a, b, orderBy) {
	let firstEl = a[orderBy];
	let secondEl = b[orderBy];
	switch (orderBy) {
		case 'birth_year':
			firstEl = +firstEl.replace('BBY', '');
			secondEl = +secondEl.replace('BBY', '');
			break;
		case 'height':
			firstEl = +firstEl;
			secondEl = +secondEl;
			break;
		case 'mass':
			firstEl = +firstEl.replace(/,/g, '');
			secondEl = +secondEl.replace(/,/g, '');
			break;
		default:
			break;
	}
	if (secondEl < firstEl) {
		return -1;
	}
	if (secondEl > firstEl) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}
const headCells = [
	{
		id: 'name',
		numeric: false,
		label: 'Name',
	},
	{
		id: 'birth_year',
		numeric: true,
		label: 'Birth Year',
	},
	{
		id: 'height',
		numeric: true,
		label: 'Height',
	},
	{
		id: 'mass',
		numeric: true,
		label: 'Mass',
	},
];

function stableSortAndSearch(array, orderBy, comparator, searchValue) {
	const arrWithoutUnknown = array.filter((el) => el[orderBy] !== 'unknown');
	arrWithoutUnknown.sort((a, b) => comparator(a, b));
	let sortedArr = [
		...arrWithoutUnknown,
		...array.filter((el) => el[orderBy] === 'unknown'),
	];
	if (searchValue) {
		sortedArr = sortedArr.filter((item) =>
			Object.keys(item).find((key) =>
				headCells.map((item) => item.id).includes(key)
					? item[key]
							.toString()
							.toLowerCase()
							.includes(searchValue.toLowerCase())
					: null
			)
		);
	}
	return sortedArr;
}

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => {
					return (
						<TableCell
							key={headCell.id}
							align='left'
							padding='normal'
							sortDirection={orderBy === headCell.id ? order : false}
						>
							<TableSortLabel
								sx={{
									color: '#fff',
									'&&.Mui-active': { color: '#fff' },
									'&&:hover': { color: '#fff' },
									...(order === 'asc'
										? {
												'&&.Mui-active #arrow-drop-up': {
													color: 'var(--colors-ui-second)',
												},
										  }
										: {
												'&&.Mui-active #arrow-drop-down': {
													color: 'var(--colors-ui-second)',
												},
										  }),
								}}
								active={orderBy === headCell.id}
								direction={orderBy === headCell.id ? order : 'asc'}
								onClick={createSortHandler(headCell.id)}
								IconComponent={IconDrop}
							>
								{headCell.label}
								{orderBy === headCell.id ? (
									<Box component='span' sx={visuallyHidden}>
										{order === 'desc'
											? 'sorted descending'
											: 'sorted ascending'}
									</Box>
								) : null}
							</TableSortLabel>
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	onRequestSort: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
};

const EnhancedTableToolbar = ({ search, setSearch }) => {
	return (
		<CharactersToolbar>
			<Typography
				sx={{
					fontSize: '1.8rem',
					fontFamily: 'var(--f-main)',
				}}
				id='tableTitle'
				component='h2'
			>
				Characters
			</Typography>
			<SearchAppBar search={search} setSearch={setSearch} />
		</CharactersToolbar>
	);
};

export function CustomTable({ characters, setCharacters }) {
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('name');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get('https://swapi-deno.azurewebsites.net/api/people')
			.then(({ data }) => setCharacters(data));
	}, [setCharacters]);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - characters.length) : 0;
	const filteredData = stableSortAndSearch(
		characters,
		orderBy,
		getComparator(order, orderBy),
		search
	);
	return (
		<Box sx={{ width: '100%' }}>
			<Paper
				sx={{
					width: '100%',
					mb: 5,
					backgroundColor: '#000',
					color: '#fff',
					borderRadius: 0,
				}}
			>
				<EnhancedTableToolbar search={search} setSearch={setSearch} />
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={characters.length}
						/>
						<TableBody>
							{filteredData
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((data, index) => {
									return (
										<TableRow
											hover
											tabIndex={-1}
											key={data.name}
											sx={{ '&& > *': { color: '#fff' } }}
										>
											<TableCell component='th' scope='row'>
												{data.name}
											</TableCell>
											<TableCell align='left'>{data.birth_year}</TableCell>
											<TableCell align='left'>{data.height}</TableCell>
											<TableCell align='left'>{data.mass}</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					sx={{ color: '#fff' }}
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={filteredData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
