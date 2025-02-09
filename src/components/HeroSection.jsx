import video from '../assets/hero1.mp4';
import logo from '../assets/logo.png';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video
                src={video} className='h-full w-full object-cover' muted autoPlay loop playsInline></video>
        </div>
        <div className='absolute inset-0 -z-10 bg-gradient-to-b
        from-transparent from-70% to-black'></div>
            <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
                <motion.img 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                src={logo} 
                alt='restaurant logo' 
                className='w-full p-4 -mb-5'/>
                <p className='p-4 text-lg tracking-tighter text-white'>Rincon</p>
            </div>
    </section>
  )
}

export default HeroSection
