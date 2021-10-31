import React, { props } from 'react'

import './DashboardLayout.css'


export const DashboardLayout = () => {

      return(
            <div className="dashboard-grid">
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />
                  <DashboardItem />


            </div>
      );
}

export const DashboardItem = (props) => {

      return(
            <div className="dashboard-item">ALLELUJA</div>
      );
}