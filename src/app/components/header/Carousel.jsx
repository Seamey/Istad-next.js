'use client';
import { Carousel } from 'flowbite-react';

export default  function CarouselComponent() {
  return (
<div className="relative h-screen">
  <Carousel>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCnylpFHA9Bwm6W6mUMW66WWarIVrO0JpnQZl_hK5qMgScYQhIWxU1d4rdYCrY8kkp-w&usqp=CAU")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="ml-16 text-white" style={{opacity:'1'}}>
        <h1 className="text-3xl md:text-5xl font-bold">Center of Science and Technology Advanced Development</h1>
        <p className="text-md md:text-lg mt-6 w-9/12">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.</p>
        <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700">Enroll Now</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/01/95/74/98/360_F_195749821_1hHA17CVi20rUsALHouBvoEnbHL6wAen.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="ml-12 md:ml-16 text-white w-10/12" style={{opacity:'1'}}>
        <h1 className="text-3xl md:text-5xl font-bold">Vision</h1>
        <p className="text-md md:text-lg  mt-8">Advanced IT Center in Cambodia</p>
        <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700">Enroll Now</button>
      </div>
    </div>
    <div className="flex h-full items-center justify-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxkKIq_APIgPKjCpgU6OXF1lRaXPE6Ip4xp1Ge4GNUqInRTT9mpeaoE-D9vHDWKoEkCI&usqp=CAU")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="ml-12 md:ml-12  text-white w-11/12" style={{opacity:'1'}
      }>
        <h1 className="text-3xl md:text-5xl font-bold mt-8">Join Our Community</h1>
        <p className="text-lg md:text-xl my-6 mt-8 ">Provide the latest methodology with high-quality training and mentoring
            <br/><br/>
            Build up the capacity and career of IT experts Cambodia
            <br/>
            <br/>
            Consult and connect CSTAD trainees to top IT careers</p>
        <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700">Enroll Now</button>
      </div>
    </div>
  </Carousel>
</div>


  );
}

