import PropTypes from 'prop-types';

function Bookmark({ bookmark }) {
    const { title } = bookmark;
    return (
        <div className='bg-white rounded-lg p-5 mt-4'>
            <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
};
export default Bookmark;