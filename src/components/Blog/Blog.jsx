import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    // console.log(blog);
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-8 pb-5 border-b'>
            <img className='rounded-lg w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex gap-6 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h5 className='text-2xl font-bold'>{author}</h5>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-[#11111199] text-xl font-medium'>{reading_time} mins read</span>
                    <button
                        className='ml-2'
                        onClick={() => handleAddToBookmark(blog)}
                    ><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-4">{title}</h2>
            <p className='text-[#11111199] text-xl font-medium my-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button
                className='text-[#6047EC] text-xl font-semibold underline'
                onClick={() => handleReadingTime(id, reading_time)}
            >Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}
export default Blog;