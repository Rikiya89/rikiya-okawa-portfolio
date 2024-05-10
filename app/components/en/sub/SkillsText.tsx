"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[9px] px-[9px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text text-lg font-panno">
            Think better with creative technology
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[33px] text-white font-medium mt-[10px] text-center mb-[15px] font-panno'
        >
            Designing tomorrow with creative coding
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-2xl text-gray-200 mb-10 mt-[10px] text-center font-panno'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText