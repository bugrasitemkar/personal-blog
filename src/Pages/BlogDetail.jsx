
import { useParams } from 'react-router-dom';
import data from '../Data/data.json'


function BlogDetail() {
  const posts = data.data;
  const { id } = useParams();

  const getblogById = () => {
    return posts.find(post => post.id === Number(id));
  }  

  const post = getblogById();
  console.log('post:', post);

  return (
    <div className='px:6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[16px]] mb-3'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold mb-3'>{post.title}</h3>
      <img src={new URL(post.coverImage, import.meta.url).href} className='rounded-2xl mb-5 w-full' alt={post.title} />
      <h3 className='mb-10'>{post.desc}</h3>
    </div>
  )
}

export default BlogDetail;
