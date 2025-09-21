import Image from "next/image";
import photo from '../../public/images/ppadriendcv.png';
import Title from "@/components/title/Title";

export default function page () {

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Title text="Hello and welcome to my e-portfolio !" />
            <div className="max-w-[1200px] w-[350px] flex flex-col lg:w-full lg:flex-row ustify-center items-center bg-white rounded-lg rounded-lg mt-10 p-10 shadow-lg shadow-light-gray">
                <Image
                    src={ photo }
                    alt={ 'photo' }
                    className='w-[300px] h-[300px] object-cover rounded-[20px] shadow-lg shadow-light-gray'
                />
                <div className="lg:block hidden border-l-4 border-gray mt-5 w-4 h-[250px] ml-20"></div>
                <div className="block lg:hidden border-t-4 border-gray mt-5 w-[85%]"></div>
                <p className="p-6 lg:ml-20 lg:w-[750px] whitespace-pre-line">
                  {`Nice to meet you !

                    Having been passionate about the world of IT for around ten years, particularly software design and development, I decided to turn this passion into my career.

                    With this goal in mind, I embarked on a computer science education path very early on, starting in high school and more specifically by pursuing a Bachelor's degree in Computer Science with a focus on application development: design, development and validation at the IUT de Lille, which I completed in my final year as an apprentice.

                    With the ambition of becoming a software architect, I decided to continue my studies at the INSA Hauts-de-France engineering school, where I am currently in my fourth year of the Computer Science and cybersecurity engineering programme as an apprentice (FISA ICy).
                    I am therefore completing this engineering apprenticeship at Jetdev, where I work as a full-stack & mobile developer.

                    On this website, you will find further information about my profile, my interests, my academic and professional background, and my technical and interpersonal skills, including examples of projects I have completed as part of my studies or in my spare time.

                    Thank you for taking the time to read these articles !`}
                </p>
            </div>
        </div>
    )

}