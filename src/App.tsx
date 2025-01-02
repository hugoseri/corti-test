import { Theme } from '@radix-ui/themes';
import { useCallback, useEffect, useState } from 'react';
import { Topbar } from './components/topbar';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';
import axios, { AxiosError } from 'axios';
import { EFileType, FileRo, TreeRo } from './utils/types';
import { generateRandomId } from './utils/randomId';

export function App() {
  const [data, setData] = useState<FileRo[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get<TreeRo>('http://localhost:8010/api/v1/tree');
  
      if (res.status === 200) {
        /**
         * Add a root element to wrap everything in it.
         */
        const dataWithRoot: FileRo = {
          id: generateRandomId(),
          name: 'Documents',
          type: EFileType.folder,
          children: res.data.data,
        }
        setData([dataWithRoot]);
      } else {
        console.error("An error occured", res)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error("An axios error occured", err.message, err)
      }
      console.error("An unknown error occured", err)
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Theme>
      <div className='flex flex-col h-dvh w-dvw max-w-full max-h-screen'>
        <Topbar/>
        <div className='flex flex-row overflow-y-auto'>
          <Sidebar data={data}/>
          <Main/>
        </div>
      </div>
    </Theme>
  );
}
