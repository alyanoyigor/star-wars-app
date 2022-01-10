import { Container } from '../components/Container';
import starWarsBg from '../assets/img/star-wars-bg.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
	font-family: var(--f-main);
	margin: 0;
	padding-top: 2rem;
	color: #fff;
	font-weight: 400;
	font-size: 3rem;

	& > span {
		font-size: 6rem;
	}

	@media (max-width: 720px) {
		font-size: 2rem;
		text-align: center;

		& > span {
			font-size: 4rem;
		}
	}

	@media (max-width: 420px) {
		font-size: 1.2rem;

		& > span {
			font-size: 2.8rem;
		}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 7rem);
	background-image: url(${starWarsBg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	padding-bottom: 2rem;

	@media (max-height: 420px) {
		height: 100%;
	}
`;

const CustomButton = styled(Link).attrs({ to: '/characters' })`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 2rem 0;
	text-transform: uppercase;
	font-family: var(--f-second);
	max-width: 180px;
	font-size: 0.9rem;
	height: 50px;
	background-color: #6e0526;
	color: #fff;
	text-decoration: none;
	transition: all 0.5s;
	box-shadow: rgba(200, 17, 74, 0.4) 0 8px 64px;

	&:hover {
		background-color: #920732;
	}

	@media (max-width: 720px) {
		margin: 2rem auto 0;
	}
`;

export const Home = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					<span>Welcome</span> <br />
					to Star Wars App
				</Title>
				<CustomButton>To Characters</CustomButton>
			</Container>
		</Wrapper>
	);
};
