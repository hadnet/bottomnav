import React, {useState} from 'react';
import {createGlobalStyle} from 'styled-components';
import {Bar} from './elements/bar';
import {List} from './elements/list';
import {Indicator} from './elements/indicator';
import {Link} from './components/Link';

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
function App() {
  const [active, setActive] = useState(0);
  return (
    <>
      <GlobalStyle />
      <Bar bgColor="gold">
        <List>
          <List.Item tag={0} active={active} onMouseOver={() => setActive(0)}>
            <Link icon={'FaHome'}>First</Link>
          </List.Item>
          <List.Item tag={1} active={active} onMouseOver={() => setActive(1)}>
            <Link icon={'FaCog'}>Second</Link>
          </List.Item>
          <Indicator />
        </List>
      </Bar>
    </>
  );
}

export default App;
