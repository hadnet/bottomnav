import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import {Bar} from './elements/bar';
import {List} from './elements/list';
import {Item} from './elements/item';
import {Indicator} from './elements/indicator';
import {Link} from './components/Link';
import {Option, OptionProps} from './components/Option';

const GlobalStyle = createGlobalStyle`
 * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }
 body {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-color: blueviolet;
 }
`;

type BottomNavPros = {
  children?: React.ReactNode;
};

function BottomNav({children}: BottomNavPros) {
  const [active, setActive] = useState(0);
  return (
    <>
      <GlobalStyle />
      <Bar bgColor="gold">
        <List>
          {React.Children.map(children as React.ReactElement<OptionProps>, (child, idx) => {
            return React.cloneElement(child, undefined, [
              <Item tag={idx} active={active} onMouseOver={() => setActive(idx)}>
                <Link icon={child.props.icon}>{child.props.title}</Link>
              </Item>,
            ]);
          })}
          <Indicator />
        </List>
      </Bar>
    </>
  );
}

function App() {
  return (
    <BottomNav>
      <Option title="Home" icon={'FaHome'} to={'/home'} />
      <Option title="Settings" icon={'FaCog'} to={'/settings'} />
      <Option title="Message" icon={'FaFacebookMessenger'} to={'/location'} />
      <Option title="Favorites" icon={'FaHeart'} to={'/favorites'} />
      <Option title="Profile" icon={'FaUserAlt'} to={'/profile'} />
    </BottomNav>
  );
}

export default App;
