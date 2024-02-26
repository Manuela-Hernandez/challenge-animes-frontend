export default function CardAnime({ title, image, message }) {

  return (
    <section className="bg-cyan-700 rounded-md m-2">
      <div className='my-2'>
        <img src={image} alt={title} className='w-full h-80 object-cover rounded-lg' />
        <h3 className='mt-2 text-center font-bold text-stone-50'>{title}</h3>
        <div className="flex justify-center items-center mt-2">
          <i className="fa-solid fa-star mx-2 text-[#fde047]"></i>
          <p className="text-white">{message}</p>
        </div>
      </div>
    </section>
  );
}