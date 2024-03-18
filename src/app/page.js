import CardCourseComponent from "./components/card/CardComponent";
import ContentCardComponent from "./components/card/ContentCard";
import CarouselComponent from "./components/header/Carousel";
export default function Home() {
  return (
    <>
      <CarouselComponent/>
      <div className="container mx-auto w-full mb-5">
      <p className="text-2xl text-black my-4 ml-10 font-bold ">COURSES</p>
      <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-center mb-6">
      <CardCourseComponent/>
       <CardCourseComponent/>
      </section>
       <p className="text-[28px] text-black mt-6 mb-6 font-bold text-center">USE FULL CONTENTS</p>
       </div>
       <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto justify-center mb-6">
       <ContentCardComponent/>
       </div>
      
    </>
  );
}
