import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


import {useEffect, useState} from "react";
import { OpenSeaDragonViewer } from '../OpenSeaDragonViewer';



const Services = () => {

  const [images, setImages] = useState([]);
  const getImages = async () => {
      const response = await fetch("https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/info.json")
      let image = await response.json();
      setImages(image.groups)
    };
  useEffect(() => {
      getImages();
    }, []);
    const [selectedImage, setSelectedImage] = useState();
const selectImage = (slide) => {
    setSelectedImage(slide.slide);
  };

  const options = {
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    deepLinking: true,
    height: 100,
  };


  return (
    <>
      <Hero hero="servicesHero">
        <Banner title="Services">
          <Link to="/" className="btn-primary">
            Database of Cell Samples 
          </Link>
          <h1>
          <div />
          </h1>
          
          <Link to="/" className="btn-primary">
            Create User
          </Link>
        </Banner>
        </Hero>
        
        <div className="App"
    style={{
    display: "flex", justifyContent:'space-between' }}
    > <div>
    <h2>Test Images</h2> {images.map((group, index) => {
    return ( <div
    style={{ display:"flex", flexDirection:'column' }}
    >
    <h3 key={index}>{group.name}</h3> {group.slides.map((slide, index) => {
    return ( <button
    key={index} onClick={() => {
    return selectImage(slide); }}
    > {slide.name}
    </button> );
    })} </div>
    ); })}
</div> <div>

<OpenSeaDragonViewer image={selectedImage} /></div>
</div>
    </>
  );
};

export default Services;
