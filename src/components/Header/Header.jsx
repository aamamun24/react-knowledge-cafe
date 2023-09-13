import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 mx-8 border-b-2">
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile Photo" />
        </header>
    );
};

export default Header;