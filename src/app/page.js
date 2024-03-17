import CarouselComponent from "./components/header/Carousel";
import CoursePage from "./course/page";
import ITNews from "./ITNews/page";
import CardCourseComponent from "./components/card/CardComponent";
export default function Home() {
  return (
    <>
      <CarouselComponent/>
      <div className="container mx-auto w-full mb-5">
      <p className="text-xl text-black my-4 ml-6 font-bold text-center">COURSES</p>
       <CardCourseComponent/>
       <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">USE FULL CONTENTS</p>
       </div>
       <div className="flex gap-[20px] justify-center ">
       <CoursePage/>
       </div>
      
    </>
  );
}
