import { Container } from './Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/svg/star-wars.svg';

const HeaderEl = styled.header`
	background-color: #000;
`;

const Wrapper = styled.div`
	height: 7rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
  margin: 0 auto;
	flex-wrap: wrap;
	max-width: 300px;
`;

const TitleLink = styled(Link).attrs({
	to: '/',
})`
	flex-shrink: 0;
	background-image: url(${logo});
	width: 5rem;
	height: 5rem;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;

const TableLink = styled(Link).attrs({
	to: '/characters',
})`
	text-decoration: none;
	color: #fff;
	font-family: var(--f-main);
	font-size: 1.2rem;
`;

export const Header = () => {
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<TitleLink />
					<TableLink>Characters</TableLink>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};
