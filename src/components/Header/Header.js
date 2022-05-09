import classes from './Header.module.scss'
import Container from '../Container/Container';

const Header = () => {
    return (
      <header className={classes.header}>
          <Container>
              <h1>Header</h1>
          </Container>
      </header>

    );
};

export default Header;