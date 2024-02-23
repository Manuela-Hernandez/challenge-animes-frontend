export default function CardAnime({ title, image, score }) {

  let message = '';

  if (score >= 1 && score <= 4) {
    message = 'I do not recommend it.';
  } else if (score >= 5 && score <= 7) {
    message = 'You may have fun.';
  } else if (score > 7) {
    message = 'Great, this is one of the best anime.';
  }


  return (
    <section className="bg-cyan-700 rounded-md m-2">
      <div className='my-2'>
        <img src={image} alt={title} className='w-full h-80 object-cover rounded-lg' />
        <h3 className='mt-2 text-center font-bold text-stone-50'>{title}</h3>
        <div className="flex justify-center items-center mt-2">
          <i className="fa-sharp fa-solid fa-star mx-2"></i>
          <p className="text-white">{message}</p>
        </div>
      </div>
    </section>
  );
}