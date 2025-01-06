import { Link } from 'react-router-dom';
import logo from '../assets/images/About us page-amico.png'

const About = () => {
    return (
        <div className='md:flex items-center  bg-gradient-to-r from-blue-200 to-purple-300 '>
            <div className='space-y-3 text-center md:space-y-6 md:p-5 md:text-left md:w-1/2'>
                <h1 className="uppercase text-4xl font-bold">About Us</h1>
                <p>At Chill Gamer Website, we are passionate gamers dedicated to bringing you the latest news, in-depth reviews, and engaging content from the gaming world. Our mission is to create a vibrant community where gamers of all levels can connect, share experiences, and enhance their skills. Whether you're looking for expert insights on new releases, helpful guides, or a place to discuss your favorite games, Chill Gamer is your ultimate resource. </p>
               <Link to = '/'> <button className="text-white mt-3 md:mt-5 px-6 py-3 rounded-lg bg-purple-600">Visit Us</button></Link>

            </div>
            <div className='md:w-1/2'>
                <img src={logo}   alt="" />
            </div>
        </div>
    );
};

export default About;