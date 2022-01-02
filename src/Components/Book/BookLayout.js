import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { props, useState } from 'react'
import './BookLayout.css'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const BookLayout = () => {
      
      /*const fontT = ["serif", "sans-serif"];
      const fontS = ["15px", "20px", "30px", "45px"];*/

      const title = "W pustyni i w puszczy";
      const author = "Henryk Sienkiewicz";
      const text = "AALLLELUEHJSDHAVUJHGD oIUJDSHYSFEGIUHSVYD IDHVDYFWSYFE";

      /*var outputT = 0;
      var outputS = 1;

      function changeTypeOutput() {
            if(outputT == 1) outputT = 0;
            else outputT = 1;

            console.log(outputT);
      }

      function changeSizeOutput() {
            outputS++;
            if(outputS == 4) outputS = 0;

            console.log(outputS);
      }

      const [fontType, setFontType] = useState(fontT[outputT]);
      const [fontSize, setFontSize] = useState(fontS[outputS]);*/

      return(
            <div>
                  
                  <div className="textContainer">
                  <div className="returnFromBook">
                        <FontAwesomeIcon icon={ faAngleLeft }/> &nbsp;&nbsp;&nbsp;go back

                  </div>
                        {/*<div className="buttonContainer">
                              &nbsp; &nbsp; &nbsp;
                              <span style={{ fontSize: "20px"}}> font settings: </span> 
                              &nbsp; &nbsp;&nbsp;
                              
                              <div className="changeFontButton" onClick={()=>{ changeTypeOutput(); setFontType(fontT[outputT]) }}> 
                                    { fontType } 
                              </div> 

                              <div className="changeFontButton" onClick={()=>{ changeSizeOutput(); setFontSize(fontS[outputS]) }}
                              style={{marginLeft: "15px"}}> 
                                    { fontSize } 
                              </div>  
                        </div>*/}

                        <div style={{width: "100%"}}>
                              <div className="titletext"
                              >
                                    {title}
                              </div>

                              <div className="authortext">{author}</div>
                              <div className="booktext">
                              {text}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
