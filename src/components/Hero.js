import React from 'react'

export default function Hero({ pageTitle }) {
    
    const getSubHeading = () => {
        switch(pageTitle){
            case 'om mig':
                return <p>Lite om mig själv</p>;
            case 'cv':
                return <p>En salig blandning gör människan hel</p>;
            case 'portfolio':
                return <p>Ett gäng egna samt kommersiella projekt</p>;
            case 'kontakt':
                return <p>Kom i kontakt med mig här</p>;
            default:
                return null;
        }
    }
    
    return (
      <div className="hero">
        <h1>{pageTitle}</h1>
        {getSubHeading()}
      </div>
    );
  }