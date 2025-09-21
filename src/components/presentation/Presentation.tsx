import HobbyCarousel from "@/components/presentation/HobbyCarousel";
import Title from "@/components/title/Title";
import SubTitle from "@/components/title/SubTitle";
import {getAge} from "@/helpers/common-helper";



export default function Presentation () {
    
    return (
        <div className="flex flex-col justify-center w-full">
            <Title text="Presentation"/>
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-gray font-bold text-2xl">Who am I ?</h2>
                <div className="max-w-[1050px] w-[350px] lg:w-full flex flex-col justify-center items-center bg-white rounded-lg mt-5 shadow-lg shadow-light-gray">
                    <p className="whitespace-pre-line p-10">
                        {`
                            My name is Adrien DA COSTA VEIGA, I am 22 years old and I am from France.

                            I have been passionate about the world of computing since I was 12 years old. That was when I got my very first personal computer. When selecting the components and assembling this computer, I had a lot of questions about how they worked. How does the motherboard work ? How is information stored on the hard drive ? How does the system know where to find the information ? These were the questions that sparked my interest in the vast field of computing.

                            They say that ‘curiosity is a bad habit’. That may be true, but for me, it's a great quality!
                            
                            My curiosity and thirst for knowledge have led me to take an interest in all kinds of subjects, including science, technology, literature, culture and many more. In addition to my curiosity, I am also very thorough, appreciating when work is done properly. I strive to apply this rigour to my programming as well, always seeking to adhere to conventions as much as possible and to optimise the code I produce.  
                            
                            I am a persistent person who is not afraid to question myself and who seeks to improve constantly.
                        `}
                    </p>
                </div>
                <div className="mt-[50px] mb-[50px] flex flex-col items-center">
                    <SubTitle text="Other interests :" />
                    <div className='mt-5'>
                        <HobbyCarousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}