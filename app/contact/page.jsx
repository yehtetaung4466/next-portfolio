"use client"
import emailjs from 'emailjs-com';
import { useRef } from 'react';
export default function ContactUs(){
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v8a2zdf','template_bajlon4', form.current, 'UCWIU0vmiZe74Olgb')
        .then((result) => {
            console.log(result.text);
            alert("Message sent");
            form.current.clear();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className='h-full w-full flex flex-col items-center'>
        <div tabIndex={0} className="collapse collapse-arrow bg-gray-500 w-9/12 mx-auto max-w-xs"> 
          <div className="collapse-title text-xl font-medium">
            Info
          </div>
          <div className="collapse-content"> 
            <p className=' text-xs font-bold sm:text-base sm:font-normal'>Email_1: yehtet804p@gmailcom <br />
               Email_2: yeaung1234@yahoo.com <br />
               Ph: +959427900982
            </p>
          </div>
        </div>
        <form className=' form-control' ref={form} onSubmit={sendEmail}>
        <div className="w-full mx-auto">
          <label className="label" htmlFor='name'>
            <span className="label-text text-gray-600 font-medium">name</span>
          </label>
          <input type="text" placeholder="Type here" id='name' name='from_name' className="input input-sm bg-gray-500" />
        </div>
        <div className="w-full mx-auto">
          <label className="label" htmlFor='email'>
            <span className="label-text text-gray-600 font-medium">email</span>
          </label>
          <input type="text" placeholder="Type here" id='email' name='from_email' className="input input-sm bg-gray-500" />
        </div>
        <div className="w-full mx-auto">
          <label className="label" htmlFor='message'>
            <span className="label-text text-gray-600 font-medium">message</span>
          </label>
          <textarea name="message" id="message" cols="30" rows="10" className=' w-60 h-28 textarea bg-gray-700'>
          </textarea>
        </div>
        <input type="submit" value="Send" className=' mt-2 bg-gray-600 btn btn-xs h-8 w-16'/>
        </form>
      </div>
    );
  };