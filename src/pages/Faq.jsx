import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
const Faq = () => {
const [activeIndices,setActiveIndices]= useState([]);
// array of questions and answers
const faqs=[

    {
        question:"What is Frontend Mentor, and how will it help me? ",
        answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript .its suitable for all levels and ideal for portifolio building "
    },
    {
      question:"Is Frontend Mentor free?" ,
      answer:"not completely free ,some projects are paid for while others are absolutely free"


    },
    {
        question:"Can i use Frontend Mentor Projects in my Portfolio",
        answer:"Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
    },
    {
        question:"How can I get help if I'm stuck on a challenge?",
        answer:"The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions."
    }
];

const toggleAnswer =(index)=>{
    if(activeIndices.includes(index)){
        setActiveIndices(activeIndices.filter(i=>i !==index))

    }else{
        setActiveIndices([...activeIndices,index])
    }
};

  return (
    <div className=' max-w-lg mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-lg '>
        <div className='flex items-center space-x-4 mb-4' >
           
        <FaStar className='text-fuchsia-400'></FaStar> 
        <h1 className='font-bold   text-xl'>FAQs</h1>
        </div>
        
        {faqs.map((faq,index)=>(
           <div  className='ml-2' key={index}>
            <button onClick={()=>toggleAnswer(index)}>
                {faq.question}
            </button>
            {activeIndices.includes(index) && <div>{faq.answer}</div>}
           </div> 
        ))}

    </div>
  )
}

export default Faq