import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",`${import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("");
        toast.success('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0 ,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity: 1 ,x:0}}
      viewport={{once:true}}
     className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> تواصل  <span className='underline underline-offset-4
         decoration-1 under font-light'> معنا </span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto text-xl'>هل أنت مستعد ؟ دعنا نبني مستقبلك معًا</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-right text-xl font-semibold'>
                    الاسم :
                <input name='Name' className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='ادخل الاسم' required />
                </div>
                  <div className='w-full md:w-1/2 text-right text-xl font-semibold md:pl-4'>
                    الايميل : 
                <input name='Email' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 mr-2' type="email" placeholder='ادخل الايميل الشخصى' required />
                </div>
            </div>
            <div className='my-6 text-right text-xl font-semibold'>
                الرسالة :
                <textarea
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                 name="message" placeholder='اكتب رسالتك ...' required></textarea>

            </div>
            <button 
            className='bg-blue-600 text-white py-2 px-12 mb-10  rounded cursor-pointer md:text-[19px] font-bold hover:animate-spin'
            >{result ? result :'ارسال'}</button>

        </form>
        </motion.div>
  )
}

export default Contact