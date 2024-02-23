export default function CardAnime({title, image, score}) {
    return (
      <section className="bg-cyan-700 rounded-md my-4">
            <div className='my-4'>
                <img src={image} alt={title} className='w-full h-80 object-cover rounded-lg' />
                  <h3 className='mt-2 text-center font-semibold text-slate-200'>{title}</h3>
            </div>
      </section>
    );
  }