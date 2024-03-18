'use client';
import ContentCardComponent from "../components/card/ContentCard";
import CardCourseComponent from "../components/card/CardComponent";
export default  function HomePage() {
  return (

    <>   
          <section className="container">
          <h1 className="font-bold md:text-3xl text-2xl m-4 ml-16 tracking-wider">COURSE</h1>
        <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 justify-center mb-6">
            <CardCourseComponent/>
            <CardCourseComponent/>
        </section>
          </section>
            <p className="text-xl text-black my-4 ml-6 font-bold">USEFULL CONTENTS</p>
             <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto justify-center mb-6">
                <ContentCardComponent/>
                <ContentCardComponent/>
             </section>
    
    </>

  );
}

