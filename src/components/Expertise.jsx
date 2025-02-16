import { tr } from 'framer-motion/client'
import { CUSINES } from '../constants'
import { motion, stagger } from 'framer-motion'

const containerVariants = {
    hiddend: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        },
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const Expertise = () => {
  return (
    <section id="expertise">
        <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
            Our Expertise
            </h2>
        <motion.div 
        initial='hidden'
        whileInView='show'
        variants={containerVariants}
        className="container mx-auto px-4">
            {CUSINES.map((cusine, index) => (
                <motion.div
                variants={itemVariants}
                key={index} 
                className='flex items-center border-b-4 
                border-dotted border-neutrla-700/40 py-2'>
                    <div className='flex-shrink-0 pr-8 text-2xl'>{cusine.number}
                    </div>
                    <div className='w-1/3 flex-shrink-0'>
                        <img src={cusine.image} alt={cusine.title} className='h-auto rounded-3xl' />
                    </div>
                    <div className='pl-8'>
                        <h3 className='text-2xl uppercase tracking-tighter text-yellow-600'>
                            {cusine.title}
                        </h3>
                        <p className='mt-4 text-lg tracking-tighter'>{cusine.description}</p>
                    </div>
                </motion.div>
            )) }
        </motion.div>
    </section>
  )
}

export default Expertise
