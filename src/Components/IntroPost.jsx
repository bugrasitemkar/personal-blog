import data from '../Data/data.json'
import { useNavigate } from 'react-router-dom';

function IntroPost() {
  const navigate = useNavigate();

  const posts = data.data;
  return (

    posts.map((post)=>
    (
      <div onClick={()=>navigate('blog-detail/'+post.id)}
        key={post.id} className='cursor-pointer grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 max-w-screen-xl mx-auto gap-8'>
        <div className='grid place-items-center'>
          <img src={post.coverImage} className='rounded-2xl object-cover max-w-[400px] max-h-[400px]'/>
        </div>
        <div>
          <h4 className='text-red-500'>{post.tag}</h4>
          <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
          <h4 className='line-clamp-6 text-grat-400 mt-5'>{post.desc}</h4>
          <div className='flex items-center mt-5'>
            <h3 className='text-gray-500'>{post.date}</h3>
          </div>
        </div>
      </div>
    ))


  )
}

export default IntroPost