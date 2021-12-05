import React from 'react';
import './Bannar.css';

import Particles from "react-tsparticles";

const Bannar = () => {

  //     
  return (


    <>

      <div className="backgroundImg">

        <div className="animation">


          <Particles
            id="tsparticles"
            options={{
              "fullScreen": {
                "enable": true,
                "zIndex": 0
              },
              "background": {

                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover",
                "height": "100%"
              },

              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onClick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "onHover": {
                    "enable": false,
                    "mode": "bubble",
                    "parallax": {
                      "force": 60
                    }
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 800
                  },
                  "grab": {
                    "distance": 60
                  }
                }
              },
              "particles": {
                "color": {
                  "value": "#ffffff"
                },
                "links": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "distance": 150,
                  "enable": true,
                  "opacity": 0.2
                },
                "move": {
                  "attract": {
                    "rotate": {
                      "x": 600,
                      "y": 1200
                    }
                  },
                  "enable": true,
                  "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  }
                },
                "number": {
                  "density": {
                    "enable": true
                  },
                  "value": 200
                },
                "opacity": {
                  "value": {
                    "min": 1,
                    "max": 1
                  },
                  "animation": {
                    "enable": true,
                    "speed": 2,
                    "minimumValue": 0.1
                  }
                },
                "shape": {
                  "options": {
                    "character": {
                      "value": [
                        "React.js",
                        "Express.js",
                        "Node.js",
                        "MongoDB",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        "Github",
                        "Api",
                        "Javascript",
                        "MERN Stack"

                      ],
                      "font": "lato",
                      "style": "",
                      "weight": "100",
                      "fontSize": "5px",
                      "fill": true
                    },
                    "char": {
                      "value": [
                        "React.js",
                        "Express.js",
                        "Node.js",
                        "MongoDB",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        "Github",
                        "Api",
                        "Javascript",
                        "MERN Stack"
                      ],
                      "font": "lato",
                      "style": "",
                      "weight": "100",
                      "fontSize": "2px",
                      "fill": true
                    }
                  },
                  "type": "char"
                },
                "size": {
                  "value": 8,
                  "animation": {
                    "speed": 10,
                    "minimumValue": 10
                  }
                },
                "stroke": {
                  "width": 1,
                  "color": {
                    "value": "#ffffff",
                    "animation": {
                      "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                      },
                      "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                      },
                      "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                      }
                    }
                  }
                }
              }
            }}
          />
          {/* <img className="backgroundImg" style={{backgroundImage:`src(${bannar})`}} alt="bannar"  /> */}

        </div>
      </div>
    </>
  );
};

export default Bannar;