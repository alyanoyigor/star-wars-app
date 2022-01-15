import { MainContainer } from 'styles';
import { Link as RouterLink } from 'react-router-dom';
import { HeaderEl, Wrapper, TitleLink, TableLink } from './styles';

export const Header = () => {
	return (
		<HeaderEl>
			<MainContainer>
				<Wrapper>
					<TitleLink component={RouterLink} to='/' />
					<TableLink component={RouterLink} to='/characters'>
						Characters
					</TableLink>
				</Wrapper>
			</MainContainer>
		</HeaderEl>
	);
};
