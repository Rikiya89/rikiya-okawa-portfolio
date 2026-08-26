"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[9px] px-[9px] border opacity-[0.9]"
        >
          <h1 className="Welcome-text text-xl font-panno">
            Think better with creative technology
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[33px] text-white font-medium mt-[10px] text-center mb-[15px] font-panno'
        >
            Designing tomorrow with<br className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block' /> creative coding
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-2xl text-gray-200 mb-10 mt-[10px] text-center font-panno'
        >
            Design the Future, Code the New
        </motion.div>
    </div>
  )
}

export default SkillText
