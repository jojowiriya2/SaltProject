import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

const Product = () => {
  const data = [
    {
      label: "salt1",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "salt2",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "salt3",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "salt4",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "salt5",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },


  ];
  return (
    <div className=' justify-center items-center flex  '>
      <div className='w-[1200px] h-[100%] '>
       <Tabs value="html" >
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
               <div className=''>
               <Carousel
                  className="rounded-xl"
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
                >
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                </Carousel>
               </div>

                <div className='p-4'>
                {desc}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        </div>
    </div>
  
);
}

export default Product