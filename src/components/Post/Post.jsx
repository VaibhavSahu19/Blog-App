import React from 'react'

function Post() {
  return (
    <div className="grid grid-cols-2 gap-[20px] mb-[30px] mt-[20px]">
        <div className=''>
            <img src="https://techcrunch.com/wp-content/uploads/2024/08/in-brief-ai-v2.jpg?resize=900,506" alt="" className="" />
        </div>
        <div>
            <h2 className='text-[1.4rem] font-bold'>Full house battery backup coming later this year.</h2>
            <p className="m-0 text-[#888] text-[0.7rem] font-bold mt-[6px] mb-[6px] flex gap-[8px]">
            <a href="" className="text-[#333]">Vaibhav Sahu</a>
            <time datetime="">29-09-2024 14:48</time>
            </p>
            <p className='m-0 mt-[10px] mb-[10px] leading-2 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae in magnam dicta repellat eligendi eveniet, vel, quod ut, accusantium beatae. Esse vero consequuntur ex adipisci perspiciatis recusandae natus hic!</p>
        </div>
    </div>
  )
}

export default Post