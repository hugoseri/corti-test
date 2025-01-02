import { Theme } from '@radix-ui/themes';
import { useEffect } from 'react';
import { Topbar } from './components/topbar';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';

export function App() {
  // Do not hesitate to refactor this effect or use a different library to retrieve data
  // it's only provided here as an example on how to fetch the data from the server
  useEffect(() => {
    fetch('http://localhost:8010/api/v1/tree')
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return (
    <Theme>
      <div className='flex flex-col h-dvh w-dvw max-w-full max-h-screen'>
        <Topbar/>
        <div className='flex flex-row overflow-y-auto'>
          <Sidebar/>
          <Main/>
        </div>
      </div>
    </Theme>
  );
}
