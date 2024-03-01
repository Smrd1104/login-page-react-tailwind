import './App.css';
import Tilt from 'react-parallax-tilt'
import image from './assets/cloud-2.jpg'
function App() {
  return (

    // <div className="bg-cover bg-center backdrop-filter backdrop-blur-2xl" style={{ backgroundImage: `url(${image})` }}>


      <div className="App bg-blue-950  h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center ">



        <div className='h-40-r w-40-r bg-gradient-to-r from-green-400 to to-blue-500 rounded-full absolute left-2/3 -top-56 animate-bounce'> </div>
        <div className='h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to purple-500 rounded-full absolute top-96 -left-20 animate-bounce'></div>
        <Tilt>

          <div className=' container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm '>
            <form className='h-full flex flex-col justify-evenly items-center'>
              <div className='text-white  text-2xl tracking-wider'>Login</div>
              <input type='text' placeholder='username' className='input-text' />
              <input type='text' placeholder='password' className='input-text' />
              <input type='submit' className='cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80' />
            </form>
          </div>
        </Tilt>


      {/* </div> */}
    </div>

  );
}

export default App;
