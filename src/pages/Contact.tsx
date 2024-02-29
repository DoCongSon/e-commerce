import { Mail, Phone } from "lucide-react";
import Line from "../components/Line.tsx";
import Button from "../components/Button.tsx";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [nameInput, setNameInput] = useState<string>('');
    const [emailInput, setEmailInput] = useState<string>('');
    const [phoneInput, setPhoneInput] = useState<string>('');
    const [messageInput, setMessageInput] = useState<string>('');

    const handleContact = () => {
        toast('Thank you for contacting us', {type: 'success'});
    }

    return (
        <div className={'mt-20 mb-[140px] flex gap-[30px]'}>
            <div className={'flex flex-col gap-8 px-9 py-10 rounded shadow bg-white w-[340px]'}>
                <div>
                    <div className={'flex gap-4 items-center'}>
                        <Phone className={'px-2.5 rounded-full text-white bg-buttons'} size={40}/>
                        <p className={'font-medium text-base'}>Call To Us</p>
                    </div>
                    <p className={'mt-6 text-sm font-normal leading-normal text-black'}>We are available 24/7, 7 days a
                        week.</p>
                    <p className={'mt-4 text-sm font-normal leading-normal text-black'}>Phone: +8801611112222</p>
                </div>
                <Line/>
                <div>
                    <div className={'flex gap-4 items-center'}>
                        <Mail className={'px-2.5 rounded-full text-white bg-buttons'} size={40}/>
                        <p className={'font-medium text-base'}>Write To US</p>
                    </div>
                    <p className={'mt-6 text-sm font-normal leading-normal text-black'}>Fill out our form and we will
                        contact you within 24 hours.</p>
                    <p className={'mt-4 text-sm font-normal leading-normal text-black'}>Emails:
                        customer@exclusive.com</p>
                    <p className={'mt-4 text-sm font-normal leading-normal text-black'}>Emails:
                        support@exclusive.com</p>
                </div>
            </div>
            <div className={'rounded shadow bg-white flex-1 py-10 px-8'}>
                <div className={'flex gap-4'}>
                    <div className={'w-full'}>
                        <p className={'text-black text-base font-medium'}>
                            Your Name<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={nameInput} onChange={e => setNameInput(e.target.value)} type="text"
                               className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'w-full'}>
                        <p className={'text-black text-base font-medium'}>
                            Your Email<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={emailInput} onChange={e => setEmailInput(e.target.value)} type="email"
                               className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                    <div className={'w-full'}>
                        <p className={'text-black text-base font-medium'}>
                            Your Phone<span className={'text-buttons'}>*</span>
                        </p>
                        <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)} type="tel"
                               className={'mt-2 h-[50px] w-full rounded bg-[#f5f5f5] text-black text-base font-normal px-4 outline-none'}/>
                    </div>
                </div>
                <div className={'w-full mt-8'}>
                    <p className={'text-black text-base font-medium'}>
                        Your Message<span className={'text-buttons'}>*</span>
                    </p>
                    <textarea value={messageInput} onChange={e => setMessageInput(e.target.value)}
                              className={'h-[200px] mt-2 w-full rounded bg-[#f5f5f5] text-black text-base font-normal p-4 outline-none'}/>
                </div>
                <div className={'mt-8 flex justify-end'}>
                    <Button text={'Send Massage'} onClick={handleContact}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;