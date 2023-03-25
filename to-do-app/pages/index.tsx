import Head from 'next/head';
import { useState } from 'react';

import CreateTaskButton from '@/components/create-task-button';
import InputBox from '@/components/input-box';
import TaskMenu from '@/components/task-menu';


export default function Home(): JSX.Element {
  

  return (
    <>
      <Head>
        
      </Head>
      <header>

      </header>
      <body>
        <main>
          <TaskMenu />
        </main>
        <footer>

        </footer>
      </body>
    </>
  )
}
