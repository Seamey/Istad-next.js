'use client';
import CardCourseComponent from "../components/card/CardComponent";

export default  function CoursePage() {
  return (
    <>
        <h1 className="font-bold md:text-3xl text-2xl m-4 ml-16 tracking-wider">COURSE</h1>
        <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-center mb-6">
            <CardCourseComponent/>
            <CardCourseComponent/>
        </section>
    </>

  );
}