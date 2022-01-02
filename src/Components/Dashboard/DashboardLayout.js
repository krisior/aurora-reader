import React, { props, useState } from 'react'

import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './DashboardLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ModalAddMenu, ModalEditMenu }from './Modal';
export const DashboardLayout = () => {

      return(
                
            <div className="main-container">
                  
                  <div className="main-title-dashboard">d a s h <span style={{color: 'rgba(52, 152, 219, 1)'}}>b o a r d</span></div>

                  <div className="grid-wrap">
                        <div className="dashboard-grid">
                        
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              <DashboardItemNormal />
                              
                              
                        </div>
                  </div>
            </div>
            
      );
}

export const DashboardItemNormal = ({ bookCoverImageUrl }) => {

      const [buttonDisplay, setButtonDisplay] = useState("not-displayed");

      const showButton = e => {
            e.preventDefault();
            setButtonDisplay("displayed");
      };

      const hideButton = e => {
            e.preventDefault();
            setButtonDisplay("not-displayed");
      };

      const [isOpenAddMenu, setIsOpenAddMenu] = useState(false);

      return(
            
            {/*HERE ONCLICK*/},

            <div className="dashboard-item-1"
                  onMouseEnter={e => showButton(e)}                  
                  onMouseLeave={e => hideButton(e)} 

                  style={{ backgroundImage: "https://i0.wp.com/szczere-recenzje.pl/wp-content/uploads/2014/03/Kamienie-na-szaniec.jpg?fit=500%2C739" }}

            >
                  <div className={buttonDisplay}>
                        <div className="dashboard-button-1">
                              <FontAwesomeIcon icon={ faPen } onClick={() => setIsOpenAddMenu(true)}/>

                              <ModalEditMenu open={ isOpenAddMenu } onClose={() => setIsOpenAddMenu(false)} />
                              
                        </div>
                        <div className="dashboard-button-1" style={{marginLeft: '2.6rem'}}> 
                              <FontAwesomeIcon icon={ faTrash }/> 
                        </div>
                  </div>
            </div>
      );
}
