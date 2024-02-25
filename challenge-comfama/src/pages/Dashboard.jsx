import { getAnimes, getAnimesTop } from '../services/request';
import { useEffect, useState } from 'react';
import CardAnime from '../components/CardAnime';
import AnimeSlider from '../components/AnimeSlider';

export default function Dashboad() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimes] = useState([]);
  const [animeListTop, setAnimesTop] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    getPage(1)
    console.log("useEffect searchTitle")
  }, [searchTitle]);

  useEffect(() => {
    getAnimesListTop()
    console.log("useEffect animeListTop")
  }, [animeListTop]);

  const handleChange = event => {
    setSearchTitle(event.target.value);
  };

  async function getAnimesListTop() {
    const animes = await getAnimesTop();
    setAnimesTop(animes.data.data);
  }

  async function getPage(page) {
    const animes = await getAnimes(page, searchTitle);
    setAnimes(animes.data.data);
    setCurrentPage(page);
  }

  function nextPage () {
    const nextPage = currentPage + 1;
    getPage(nextPage);
  }

  function previousPage () {
    const previous = currentPage - 1;
    getPage(previous);
  }

  return (
    <section className='bg-sky-900'>
      <header className='mb-10'>
        <AnimeSlider animeList={animeListTop} />
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
            animeList.map((anime, index) => (
              <CardAnime
                title={anime.title}
                image={anime.images.jpg.image_url}
                key={`${anime.mal_id}${index}`}
                score={anime.score}
              />
            ))
          }
        </div>
        <div className='grid grid-cols-2 mt-4 mx-5'>
          <button
            className='w-1/4 h-8 rounded-lg text-xl border-solid bg-slate-300 justify-self-start mb-5'
            onClick={previousPage}
            disabled={currentPage <= 1}>
            Previous
          </button>
          <button
            className='w-1/4 h-8 rounded-lg text-xl border-solid bg-slate-300 justify-self-end mb-5'
            onClick={nextPage}>
            Next
          </button>
        </div>
      </div>

    </section>
  )
}