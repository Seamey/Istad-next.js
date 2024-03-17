"use client";
import React from "react";
import { Card, CardBody, Image, Button, Slider, image } from "@nextui-org/react";
import { FaClock } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

const content=[
  {
    "title":"FLUTTER MOBILE DEVELOPMENT",
    "description":"Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
    "image":"https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
  },
  {
    "title":"SQL & DATA MODELING WITH POSTGRESQL",
    "description":"SQL & Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers below,",
    "image":"https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png"
  },
  {
    "title":"DEVOPS ENGINEERING",
    "description":"This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.",
    "image":"https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png"
  },
  {
    "title":"DOCKER",
    "description":"Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,",
    "image":"https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png"
  },
  {
    "title":"ANDROID DEVELOPMENT",
    "description":"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. This course will teach you basic Android programming and will also take you through some advance concepts related to Android application development and include with UX / UI Design concept. Please see the course offers below,",
    "image":"https://api.istad.co/media/image/b9bf96d7-c352-4533-8025-f017517ba648.png"
  },
]
export default function CardCourseComponent(contents) {
  const [liked, setLiked] = React.useState(false);
  return (
    <section className="flex md:nowrap flex-wrap gap-4 " >
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[550px] "
      shadow="sm"
    >
     <CardBody>
  {content.map((item, index) => (
    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center" key={index}>
      <div className="relative col-span-6 md:col-span-4">
        <Image
          alt="Album cover"
          className="object-cover"
          height={200}
          src={item.image}
          width="100%"
        />
      </div>
      <div className="flex flex-col col-span-6 md:col-span-8">
        <div className="flex justify-between items-start">
          <div className="col-8 col-md-6 pl-2">
            <h6 className="course-title text-lg font-semibold mb-1 uppercase hover:text-blue-700">
              {item.title}
            </h6>
            <p className="course-desc mt-1 text-sm line-clamp-3">
              {item.description}
            </p>
          </div>
          <div className="col-12 col-md-3 pl-1 pb-0 mb-2 course-detail">
            <div className="d-flex flex-row flex-sm-row flex-md-column justify-content-between  w-[100px]">
              <p className="course-hour p-0 m-1  flex">
                <FaClock />  &nbsp;
                <span>80</span> &nbsp;
                <span>hours</span>
              </p>
              <p className="course-level p-0 m-1 flex">
                <FaLayerGroup />&nbsp;
                <span>Medium</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</CardBody>

    </Card>
    </section>
  );
}
