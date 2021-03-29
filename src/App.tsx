import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import * as ReactIcons from 'react-icons/all';
import {Bar, HEX} from './elements/bar';
import {List} from './elements/list';
import {Item} from './elements/item';
import {Indicator} from './elements/indicator';
import {Icon, Link} from './components/Link';
import {Option, OptionProps} from './components/Option';
import {IconType} from 'react-icons';

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
  color?: string | HEX;
  bgColor?: string | HEX;
  icon: keyof typeof ReactIcons;
  children?: React.ReactNode;
};

function BottomNav({children, icon}: BottomNavPros) {
  const [active, setActive] = useState(0);
  const getSize = React.useMemo(() => React.Children.count(children), [children]);
  const ReactIcon: IconType = ReactIcons[icon];
  return (
    <>
      <GlobalStyle />
      <Bar bgColor="gold" size={getSize}>
        <List>
          {React.Children.map(children as React.ReactElement<OptionProps>, (child, idx) => {
            return React.cloneElement(child, undefined, [
              <Item key={idx} tag={idx} active={active} onMouseOver={() => setActive(idx)}>
                <Link icon={child.props.icon} to={child.props.to}>
                  {child.props.title}
                </Link>
              </Item>,
            ]);
          })}
          <Indicator />
        </List>
        <Icon>
          <ReactIcon color={'#D48C00'} />
        </Icon>
      </Bar>
    </>
  );
}

function App() {
  return (
    <BottomNav icon={`FaEllipsisV`}>
      <Option title="Home" icon={'FaHome'} to={'/home'} />
      <Option title="Settings" icon={'FaCog'} to={'/settings'} />
      <Option title="Message" icon={'FaFacebookMessenger'} to={'/location'} />
    </BottomNav>
  );
}

export default App;
