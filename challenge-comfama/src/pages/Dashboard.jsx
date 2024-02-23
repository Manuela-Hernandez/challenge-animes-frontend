import { getAnimes } from '../services/request';
import { useEffect, useState } from 'react';
import CardAnime from '../components/CardAnime'

export default function Dashboad() {
  const [animeList, setAnimes] = useState([]);

  useEffect(() => {
    getAnimes()
      .then((response) => {
        console.log(response.data.data);
        setAnimes(response.data.data);
      })
      .catch((error) => {
        console.log((error));
      });
  }, []);

  return (
    <div className='bg-slate-900'>
      <div className='grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {
          animeList.map((anime) => (
            <CardAnime title={anime.title} image={anime.images.jpg.image_url} key={anime.mal_id} score={anime.score} />
          ))
        }
      </div>
    </div>


  )

}