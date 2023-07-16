import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import GoogleMapReact from 'google-map-react';

import React from 'react'

const Contact = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  
  return (
    <div className='w-full h-auto py-10 '>
      <div className='sm:flex flex-1 justify-center items-center '>
        <div className=' border rounded-xl py-4 m-4 p-4 justify-center items-center '>
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Contact us..
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details and message.
              </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Email" />
                    <Textarea type="message" size="lg" label="message" />
                  </div>
                  <Button className="mt-6" fullWidth>
                    send
                  </Button>
                </form>
            </Card>
        </div>

        <div className=' justify-center items-center '>
          <div style={{border: '1px solid red',borderRadius: '25% 10%', height: '34vh', width: '49vh',}}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact