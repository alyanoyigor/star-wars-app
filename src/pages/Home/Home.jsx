import { Container } from '../../components/Container';
import { Link as RouterLink } from 'react-router-dom';
import { CustomButton, Title, Wrapper } from './styled';

export const Home = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					<span>Welcome</span> <br />
					to Star Wars App
				</Title>
				<CustomButton component={RouterLink} to='/characters'>
					To Characters
				</CustomButton>
			</Container>
		</Wrapper>
	);
};
