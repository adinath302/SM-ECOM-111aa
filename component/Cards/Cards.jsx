import React from 'react'
import { motion } from "motion/react"
import { GrYoga } from 'react-icons/gr'

const whyChooseData = [
    {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education",
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3,
    },
    {
        id: 2,
        title: " Personalized Learning",
        desc: " Our special education experts have a degree in special education",
        icon: <GrYoga />,
        bgColor: "#73bc00",
        delay: 0.6,
    },
    {
        id: 3,
        title: " Expert Guidance",
        desc: "All of our special education experts have a degree in special education",
        icon: <GrYoga />,
        bgColor: "#fa6400",
        delay: 0.9,
    },
    {
        id: 4,
        title: "24/7 Support",
        desc: "All of our special education experts have a degree in special education",
        icon: <GrYoga />,
        bgColor: "#fe6baa",
        delay: 0.9,
    },
]

const Cards = () => {
    return (
        <div className='bg-[#f9fafc] !py-24'>
            <div className="container flex justify-center flex-col">
                {/* header section  */}
                <div className='!space-y-4 !p-6 text-center max-w-[500px] !mx-auto !mb-5'>
                    <h1 className='uppercase font-semibold text-orange-600'>Why Choose Us</h1>
                    <p className='font-semibold text-3xl'>benefits of online tutorin services with us</p>
                </div>
                {/* cards section  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {whyChooseData.map((item) => {
                        return (
                            <motion.div
                                variants={SlideLeft(item.delay)}
                                className='!space-y-4 !p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]'>
                                {/* icon section  */}
                                <div style={{ backgroundColor: item.bgColor }} className='w-18 h-18 rounded-lg flex justify-center items-center text-white'>
                                    <div className='text-2xl'>{item.icon}</div>
                                </div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-sm text-gray-500'>{item.desc}</p>
                            </motion.div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards