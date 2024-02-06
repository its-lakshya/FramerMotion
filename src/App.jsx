import { motion } from "framer-motion";

function App() {

  const gridContainerVarients = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 }, },
  }

  const gridSquareVarients = {
    hidden : {opacity : 0}, show: {opacity : 1}
  }

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVarients}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >

        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
          
          <motion.div className='w-20 h-20 bg-stone-200 rounded-lg' 
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:"easeOut", delay:0.2}}>
          </motion.div>
          <motion.div className='w-20 h-20 bg-stone-200 rounded-full'
          initial={{opacity:0, y:-100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:"easeOut", delay:0.4}}>
          
          </motion.div>
        </motion.div>

        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
          <motion.div 
          className='w-1/3 h-1/3 shadow-md bg-rose-400'
          animate={{
            scale:[1,2,2,1],
            rotate:[0, 90, 90, 0],
            borderRadius:["10%", "10%", "50%", '10%'],
          }}
          transition={{duration: 5, ease:"easeInOut", repeat:Infinity, repeatDelay:1}}
          >
          </motion.div>

        </motion.div>

        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
          <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.1, backgroundColor:'#d1d5db', color:'black'}} transition={{bounceDamping:0, bounceStiffness:600}} className='bg-emerald-600 py-4 w-1/2 rounded-lg text-2xl text-gray-100 font-light tracking-wide'>
            Subscribe
          </motion.button>
        </motion.div>
        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
        <motion.div variants={gridSquareVarients} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"></motion.div>
      
      </motion.section>
    </div>
  );
}

export default App;
