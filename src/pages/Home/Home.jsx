import { MainContainer } from 'styles';
import { Link as RouterLink } from 'react-router-dom';
import { CustomButton, Title, Wrapper } from './styled';

export const Home = () => {
	return (
		<Wrapper>
			<MainContainer>
				<Title>
					<span>Welcome</span> <br />
					to Star Wars App
				</Title>
				<CustomButton component={RouterLink} to='/characters'>
					To Characters
				</CustomButton>
			</MainContainer>
		</Wrapper>
	);
};
