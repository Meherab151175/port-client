import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jxctuff', 'template_iw8hc0i', form.current, 'JTZM-vW7no0l9OiOB')
        .then((result) => {
            if(result.text==='OK'){
                e.target.reset()
                toast.success("Submit successfully!")
            }
        }, (error) => {
            console.log(error.text);
        });
    };
    
    
    return (
        <div name='contact' className="flex flex-col  items-center justify-center w-full h-full bg-[#0a192f]" >
            <form onSubmit={sendEmail} ref={form} className="flex flex-col max-w-[600px] w-full">
                <div className="py-8  text-center mx-auto">
                    <p className="text-4xl font-bold inline border-b-2 border-pink-600 text-gray-700">Contact</p>
                    <p className="text-gray-300 py-3">Submit the email</p>
                </div>
                <input className=" border-2  outline-none rounded-xl overflow-hidden text-[#ccd6f6] font-semibold my-4 px-4 py-2 bg-transparent" placeholder="Name" type="text" name="name" id="" />
                <input className=" border-2  outline-none rounded-xl overflow-hidden text-[#ccd6f6] font-semibold  my-4 px-4 py-2 bg-transparent" type="email" name="email" placeholder="Email" id="" />
                <textarea name="message" id="" placeholder="Message" className=" resize-none p-2 border-2  outline-none rounded-xl overflow-hidden text-[#ccd6f6] font-semibold  bg-transparent" cols="30" rows="5"></textarea>

                <div>
                    <button type="submit" className='py-3 px-6 mx-auto rounded-md my-5 text-white border-2 hover:bg-pink-600  flex items-center'>Submit </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;