import { getAnimes } from '../services/request';
import { useEffect, useState } from 'react';
import CardAnime from '../components/CardAnime';
import AnimeSlider from '../components/AnimeSlider';

export default function Dashboad() {
  const [animeList, setAnimes] = useState([]);
  const [animeListFiltered, setAnimesFiltered] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    getAnimes()
      .then((response) => {
        console.log(response.data.data);
        setAnimes(response.data.data);
        setAnimesFiltered(response.data.data);
      })
      .catch((error) => {
        console.log((error));
      });
  }, []);


  useEffect(() => {
    const filteredResults = animeList.filter(item =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setAnimesFiltered(filteredResults);
  }, [searchTitle]);


  const handleChange = event => {
    setSearchTitle(event.target.value);
  };

  return (
    <section className='bg-sky-900'>
      <header className='mb-10'>
        <AnimeSlider animeList={animeList} />
        <div className='flex justify-center mt-8'>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={handleChange}
          className="my-6 rounded-md text-xl md:w-1/4"
        />
      </div>
      </header>
      <div >
        <div className='grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {
            animeListFiltered.map((anime) => (
              <CardAnime title={anime.title} image={anime.images.jpg.image_url} key={anime.mal_id} score={anime.score} />
            ))
          }
        </div>
      </div>

    </section>
  )
}