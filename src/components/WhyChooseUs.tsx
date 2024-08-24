
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/236x/57/00/d6/5700d6566db4f5b5aa0fd6ba119a6f66.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/236x/a8/50/df/a850df810e0dd038392db0a1210b196b.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          )
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/236x/d1/3d/15/d13d153ed8ee31062289b7d3cffde791.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/originals/fd/41/f9/fd41f91f5edd2d595ae4431af1e4ebbf.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/236x/db/d3/63/dbd3632bf3f89a7eaefce3e42d2105fa.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="https://i.pinimg.com/236x/84/bd/02/84bd02ecc2edaf0660c2c8de81443736.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs