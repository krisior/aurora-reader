import React, { props, useState } from 'react'
import { lightTheme } from '../../Styles/globalStyles';
import './BookLayout.css'

export const BookLayout = () => {
      const text = "AALLLELUEHJSDHAVUJHGD oIUJDSHYSFEGIUHSVYD IDHVDYFWSYFE";
      
      return(
            <div className="textcontainer">
                  <div className="titletext">
                        W pustyni i w puszczy
                  </div>
                  <div className="authortext">Adam Techner</div>
                  <div className="booktext">
                  <p>Zesrało się i chuj</p>

                  Koniec.
                   </div>
            </div>
      );
}
