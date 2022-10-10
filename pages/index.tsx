import React from "react";
import {
  Education,
  Experience,
  Extras,
  Profile,
  Projects,
  Resume,
} from "../components";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="text-4xl list-none flex items-center justify-center border-b-2 mb-5 text-white bg-blue-900 w-full">
        <ul>
          Resume Builder
        </ul>
      </nav>
      <main>
        <section>
        <Education />
        </section>
        <section>
        <Experience />
        </section>
        <section>
        <Extras />
        </section>
        <section>
        <Profile />
        </section>
        <section>
        <Projects />
        </section>
        <section>
        <Resume />
        </section>
      </main>
    </div>
  );
};

export default Home;
