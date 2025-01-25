import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorem. Repudiandae magni dignissimos eos iusto ea eaque soluta eius tempore, repellat quae ducimus libero, facere vitae fugit culpa, dolor inventore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, labore porro possimus beatae aliquam, rerum quo modi, itaque sunt reprehenderit sapiente dolores commodi rem harum. Possimus autem ducimus molestias dolore.</p>
          <b className='text-gray-800'>Our mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias laboriosam, deserunt rem, architecto voluptatem veritatis necessitatibus mollitia eaque aut nostrum corrupti porro temporibus culpa illum quidem ducimus nobis sit!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose us'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet. Unde, quidem? Distinctio nulla quaerat cupiditate facilis repudiandae quos est porro labore, nesciunt consectetur totam ipsa dolores inventore ipsam rem.</p>
        </div>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet. Unde, quidem? Distinctio nulla quaerat cupiditate facilis repudiandae quos est porro labore, nesciunt consectetur totam ipsa dolores inventore ipsam rem.</p>
        </div>
        <div className='border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet. Unde, quidem? Distinctio nulla quaerat cupiditate facilis repudiandae quos est porro labore, nesciunt consectetur totam ipsa dolores inventore ipsam rem.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About