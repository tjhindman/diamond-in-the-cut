import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { HomeHeader, AboutUs, ProjectsPreview, NavBar } from "../components";

const Home = () => {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <Head>
        <title>Welcome | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomeHeader />
      <AboutUs />
      <ProjectsPreview />
    </div>
  );
};

export default Home
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//     </div>
//   )
// }
