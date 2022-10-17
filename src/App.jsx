import './App.css';
import Main from '../src/components/main';
import Nav from '../src/components/navbar';
import SideMenu from '../src/components/sidemenu';
import TitleTop from '../src/components/titleTop';
import { useState } from 'react';

function App () {
  const [active, inactive] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSideMenu = () => {
    inactive(!active);
    console.log('yo');
  };

  return (
    <>
      <TitleTop />
      <Nav toggleSideMenu={toggleSideMenu} setQuery={setQuery} />
      <Main query={query} />
      <SideMenu active={active} toggleSideMenu={toggleSideMenu} />
    </>
  );
}

export default App;
