import { RssIcon } from '@heroicons/react/solid';
import Head from 'next/head'
import { Header,Banner,SmallCard,MediumCard,LargeCard } from '../components';

export default function Home({exploreData,cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto sm:px-16'>
        <div className='pt-6'>
          
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2
          md:grid-cols-3 lg:grid-cols-4 ">
              {/* pull some data from a server -API endpoints */}
             {exploreData.map(({img,distance,location},id)=><SmallCard 
             img={img} 
             distance={distance}
             location={location} />)}
          </div>
        </div>

        <div className='pt-6 mt-4'>
          {/* mediumcard */}
          <h1 className='text-4xl font-semibold pb-5'>Live anywhere</h1>
          <div className='flex pt-6 space-x-2 overflow-scroll lg:overflow-hidden ' style={{}}>
            {cardData?.map(({img,title},id)=><MediumCard img={img} title={title} />)}
          </div>
        </div>
        <LargeCard url="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"/>
        <footer>
          
        </footer>

      </main>
      {/* Banner */}

    </div>
  )
}


export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then((res)=>res.json())
  
  const cardData = await fetch('https://links.papareact.com/zp1').then((res)=>res.json());
 return {props:{exploreData,cardData}}
}


