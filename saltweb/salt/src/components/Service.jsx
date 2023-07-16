import React from 'react'
import { services } from '../assets';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

const Service = () => {
  return (
    <div className='flex sm:flex-col  md:flex-row flex-col justify-center items-center  py-4'>
        {services.map((ser) => (
            <Card className="w-96 m-2">
            <CardHeader shadow={true} floated={false} className="h-96 hidden sm:flex">
            <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
            </CardHeader>
            <CardBody>
            <div className="flex items-center justify-between mb-2">
                <Typography key={ser.title} color="blue-gray" className="font-medium">
                {ser.title}
                </Typography>
            </div>
            <Typography key={ser.description} variant="small" color="gray" className="font-normal opacity-75 ">
                {ser.description}
            </Typography>
            </CardBody>
        </Card>
        ))}
    </div>
  )
}

export default Service