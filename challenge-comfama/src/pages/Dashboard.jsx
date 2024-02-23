import { getAnimes } from '../services/request';
import { useEffect, useState } from 'react';
import CardAnime from '../components/CardAnime';

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
      <div className='flex justify-center'>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={handleChange}
        className="my-6 w-1/4 rounded-md text-xl"
      />
    </div>
      <div >
        <div className='grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
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