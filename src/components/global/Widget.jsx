import React from 'react'

const Widget = ({bgClass, iconClass, icon, value, label, chartId}) => {
  return (
    <div className={`col-xl-3 mb-50 widget-style1`}>
    <div className={`${bgClass} box-shadow border-radius-10 height-100-p widget-style1`}>
      <div className="d-flex flex-wrap align-items-center">
        <div className="circle-icon">
          <div className={`icon border-radius-100 font-24 text-blue ${iconClass}`}>
            {icon}
          </div>
        </div>
        <div className="widget-data">
          <div className="weight-800 font-18">{value}</div>
          <div className="weight-500">{label}</div>
        </div>
        <div className="progress-data">
          <div id={chartId}></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Widget
