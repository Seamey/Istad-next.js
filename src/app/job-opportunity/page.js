import ContentCardComponent from "../components/card/ContentCard";

export default function Opportunity(){
    return(
        <>
         <p className="text-xl text-black my-4 ml-6 font-bold">USEFULL CONTENTS</p>
       <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto justify-center mb-6">
            <ContentCardComponent/>
        </section>
        </>
    );
}