import { Header } from '@rneui/base';

function NavBar() {
  return (
    <Header
      leftComponent={{ icon: 'home', color: '#fff' }}
      centerComponent={{ text: 'Event Buddy', style: { color: '#fff' } }}
      rightComponent={{ icon: 'menu', color: '#fff' }}
    />
  );
}

export default NavBar;
