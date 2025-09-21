'use client'

import { useRef } from "react";
import Title from "../title/Title";
import './ContactStyle.scss';
import SubSubTitle from "../title/SubSubTitle";
import SubTitle from "../title/SubTitle";

export default function Contact () {

	const subjectInput = useRef<HTMLInputElement>(null);
	const bodyInput = useRef<HTMLTextAreaElement>(null);

	function handleSubmit() {
		const subject = subjectInput?.current?.value;
		const body = bodyInput?.current?.value;
		window.location.href = `mailto:dacostaveiga.adrien@gmail.com?subject=${encodeURIComponent("" + subject)}&body=${encodeURIComponent("" + body)}`;
	}

    return (
        <div className="flex flex-col h-[100vh]">
			<header>
				<Title text={"Contact"}/>
			</header>
			<div className="flex flex-col items-center mt-20">
                <SubTitle text="You can contact me using the form below !" />
                <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit} method="POST">
                    <label className="form-label shadow-lg shadow-light-gray">
                        <SubSubTitle text={"Subject"}/>
                        <input className="object" type="text" name="subject" ref={subjectInput} />
                    </label>
                    <label className='form-label shadow-lg shadow-light-gray'>
                        <SubSubTitle text={"Your message"}/>
                        <textarea className="message" name="body" rows={10} ref={bodyInput}></textarea>
                    </label>
                    <button className="mt-10 p-3 text-gray bg-white rounded-md hover:bg-gray hover:text-white shadow-md shadow-light-gray" type="submit">Send email</button>
                </form>
               <div className="flex flex-row gap-5">
                <div className="mt-10 flex flex-col items-center">
                        <span className="font-bold">My LinkedIn profile</span>
                        <a href="https://www.linkedin.com/in/adrien-da-costa-veiga-938064256/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="mt-10 flex flex-col items-center">
                        <span className="font-bold">My Github profile</span>
                        <a href="https://github.com/AdrienDCV">
                            <img width="60" height="60" alt="GitHub Logomark" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
                        </a>
                    </div>
               </div>
            </div>
		</div>
    )

}