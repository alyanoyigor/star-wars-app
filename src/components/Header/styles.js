import { styled } from '@mui/system';
import Link from '@mui/material/Link';
import logo from 'assets/svg/star-wars.svg';

export const HeaderEl = styled('header')`
	background-color: #000;
`;

export const Wrapper = styled('div')`
	height: 7rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	flex-wrap: wrap;
	max-width: 300px;
`;

export const TitleLink = styled(Link)`
	flex-shrink: 0;
	background-image: url(${logo});
	width: 5rem;
	height: 5rem;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;

export const TableLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-family: var(--f-main);
	font-size: 1.2rem;
`;
