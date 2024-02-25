import React from 'react';
import portfolioData from "../portfoliodata.json";
import swimImage from "../assets/images/swim.png";
import sodertaljeImage from "../assets/images/sodertalje.jpg";
import hamboImage from "../assets/images/hambo.png";
import albertImage from "../assets/images/albert.png";
import zatasnickarnImage from "../assets/images/zatasnickarn.png";
import simplifyImage from "../assets/images/simplify.png";
import dreamImage from "../assets/images/dream.png";
import piggiesImage from "../assets/images/piggies.png";

function FetchLocalProjects() {
  const images = {
    swim: swimImage,
    sodertalje: sodertaljeImage,
    hambo: hamboImage,
    albert: albertImage,
    zatasnickarn: zatasnickarnImage,
    simplify: simplifyImage,
    dream: dreamImage,
    piggies: piggiesImage
  };

  return (
    <div className="content-design">
        {portfolioData.design.map((project) => (
            <div className="card" key={project.id}>
                <div className="card-heading">
                    <p className="card-category">{project.category}</p>
                    <p className="card-title">{project.title}</p>
                </div>
                <figure className="card-img">
                <img src={images[project.cover.replace(/\.[^/.]+$/, '')]} alt={project.title} />
                </figure>
            </div>
        ))}   
    </div>
  );
}


export default FetchLocalProjects;
