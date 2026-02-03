'use client';

import { toast } from "react-hot-toast";

const EmailMe = () => {

  const textToCopy = 'cassiusejekwu@gmail.com'

  const handleCopy = () => {
    toast.dismiss();
    try {
      navigator.clipboard.writeText(textToCopy);
      toast.success('Email copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy email');
      console.error('Error copying email to clipboard:', error);
    }
  }

  return (
    <div className='space-x-2 flex mt-6 max-lg:justify-center group max-sm:w-full'>
      <div className="border border-gray-500 p-2.5 grid place-content-center w-max low-contrast rounded-lg relative cursor-default" onClick={() => {
        handleCopy();
      }}>
        <p>
          cassiusejekwu@<span className="max-sm:hidden inline">gmail.com</span>
        </p>
        <span className="text-[0.75rem] whitespace-nowrap absolute left-2.5 top-[120%] dark:text-purple-300 text-purple-500 transition-opacity opacity-0 group-hover:opacity-100 ">
          click the email to copy it
        </span>
      </div>
      <button className='p-2.5 shrink-0 px-3 text-white bg-green-600 dark:bg-green-500 rounded-lg text-sm lg:text-base' onClick={() => {
        window.location.href = '#contact'
      }} >
        Message me
      </button>
    </div>
  )
}

export default EmailMe