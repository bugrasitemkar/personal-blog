import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'

function Home() {
  return (
    <div className='mb-[5%]'>
      <div className="hidden md:block">
        <Search selectedTag={(tag) => console.log(tag)} />
      </div>
      <IntroPost />
    </div>
  )
}

export default Home