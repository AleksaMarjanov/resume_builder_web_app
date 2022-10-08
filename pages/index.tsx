import React from 'react'
import { Education, Experience, Extras, Profile, Projects, Resume } from '../components'

interface Props {
  
}

const Home = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <nav>
        <ul>
          <li className='text-4xl list-none flex items-center justify-center border-b-2 mb-5'>
            Resume Builder
          </li>
        </ul>
      </nav>
        <main>
        <Education/>
        <Experience />
        <Extras />
        <Profile />
        <Projects />
        <Resume />
    </main>
    </div>
  )
}

export default Home