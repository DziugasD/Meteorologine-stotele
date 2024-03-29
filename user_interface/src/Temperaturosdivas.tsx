import React, { Component } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';


export function Lietus_logo(){
  return(
    <svg className="lietus-logo" width="367" height="367" viewBox="0 0 367 367" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9375 149.094C22.9375 199.129 51.0289 242.361 91.75 262.757V236.259C64.3419 218.081 45.875 186.128 45.875 149.094C45.875 91.2966 90.8531 45.875 144.601 45.875C190.196 45.875 229.48 78.5614 240.349 123.761L240.384 123.747C241.919 130.018 242.897 136.52 243.262 143.193C250.408 139.611 258.359 137.625 266.64 137.625C295.955 137.625 321.125 162.508 321.125 194.969C321.125 214.586 311.932 231.436 298.188 241.698V268.305C325.222 255.781 344.063 227.656 344.063 194.969C344.063 150.631 309.399 114.688 266.64 114.688C264.991 114.688 263.353 114.741 261.729 114.847C247.336 61.8139 200.347 22.9375 144.601 22.9375C77.4082 22.9375 22.9375 79.4196 22.9375 149.094ZM214.683 231.699C217.088 233.088 220.855 232.481 222.782 229.144C223.837 227.316 225.193 223.519 226.175 217.339C226.566 214.875 226.862 212.276 227.075 209.608C220.377 214.347 215.302 219.15 212.846 223.405C210.92 226.743 212.278 230.31 214.683 231.699ZM227.017 182.602C238.971 175.905 249.092 172.079 249.092 172.079C249.092 172.079 250.416 182.849 250.468 196.418C250.525 211.284 249.055 229.509 242.644 240.615C234.583 254.583 216.931 259.485 203.217 251.565C189.504 243.645 184.922 225.901 192.983 211.933C200.018 199.745 214.519 189.604 227.017 182.602ZM138.957 243.37C141.362 244.759 145.129 244.153 147.055 240.815C148.11 238.987 149.466 235.191 150.448 229.011C150.84 226.547 151.135 223.948 151.349 221.279C144.65 226.019 139.575 230.822 137.119 235.077C135.193 238.415 136.552 241.981 138.957 243.37ZM151.291 194.274C163.245 187.576 173.366 183.751 173.366 183.751C173.366 183.751 174.69 194.52 174.742 208.09C174.798 222.955 173.328 241.18 166.918 252.287C158.857 266.255 141.205 271.157 127.491 263.237C113.778 255.316 109.195 237.573 117.257 223.605C124.291 211.416 138.793 201.276 151.291 194.274ZM248.635 299.482C246.708 302.819 242.941 303.426 240.536 302.037C238.131 300.648 236.773 297.081 238.699 293.743C241.155 289.488 246.23 284.685 252.928 279.946C252.715 282.614 252.419 285.213 252.028 287.677C251.046 293.858 249.69 297.654 248.635 299.482ZM274.945 242.417C274.945 242.417 264.824 246.243 252.87 252.94C240.372 259.942 225.871 270.083 218.836 282.272C210.775 296.239 215.357 313.983 229.07 321.903C242.784 329.823 260.436 324.921 268.497 310.954C274.908 299.847 276.378 281.622 276.321 266.757C276.269 253.187 274.945 242.417 274.945 242.417ZM163.485 320.408C165.89 321.797 169.657 321.191 171.584 317.853C172.639 316.026 173.995 312.229 174.977 306.049C175.368 303.585 175.664 300.986 175.877 298.318C169.179 303.057 164.104 307.86 161.648 312.115C159.722 315.453 161.08 319.019 163.485 320.408ZM175.819 271.312C187.774 264.615 197.895 260.789 197.895 260.789C197.895 260.789 199.219 271.559 199.27 285.128C199.327 299.993 197.857 318.218 191.446 329.325C183.385 343.293 165.733 348.195 152.02 340.275C138.306 332.354 133.724 314.611 141.785 300.643C148.82 288.455 163.321 278.314 175.819 271.312Z" fill="black"/>
</svg>
  )
}

export function Saule_logo(){
  return(
    <svg className="saule-logo" width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M225 75V30H255V75H225ZM309.511 89.6071L332.011 50.636L357.991 65.636L335.491 104.607L309.511 89.6071ZM240 345C297.99 345 345 297.99 345 240C345 182.01 297.99 135 240 135C182.01 135 135 182.01 135 240C135 297.99 182.01 345 240 345ZM240 375C314.558 375 375 314.558 375 240C375 165.442 314.558 105 240 105C165.442 105 105 165.442 105 240C105 314.558 165.442 375 240 375ZM405 225H450V255H405V225ZM414.365 122.01L375.394 144.51L390.394 170.49L429.365 147.99L414.365 122.01ZM122.01 65.636L144.51 104.607L170.49 89.6071L147.99 50.636L122.01 65.636ZM89.6062 170.49L50.6351 147.99L65.6351 122.01L104.606 144.51L89.6062 170.49ZM225 405V450H255V405H225ZM75 225H30V255H75V225ZM50.6343 332.01L89.6054 309.51L104.605 335.49L65.6343 357.99L50.6343 332.01ZM144.511 375.396L122.011 414.367L147.991 429.367L170.491 390.396L144.511 375.396ZM332.01 429.367L309.51 390.396L335.49 375.396L357.99 414.367L332.01 429.367ZM375.395 335.49L414.366 357.99L429.366 332.01L390.395 309.51L375.395 335.49Z" fill="black"/>
    </svg>
  )
}
export function Naktis_logo(){
  return(
    <svg className="naktis-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.591 19.1057C28.0513 17.388 28.1145 15.6574 27.837 14.0114C27.4654 15.2034 26.8022 16.2331 25.947 17.0413L25.9461 17.0499C25.3061 17.6802 24.5516 18.1842 23.7221 18.5341C22.7901 18.9273 21.7849 19.1169 20.7738 19.0903C19.7627 19.0638 18.7688 18.8216 17.8588 18.3801C16.9488 17.9386 16.1435 17.3078 15.4968 16.5301C14.8501 15.7523 14.377 14.8454 14.109 13.8701C13.8409 12.8947 13.7843 11.8734 13.9427 10.8744C14.1011 9.8754 14.471 8.92174 15.0277 8.07718C15.5469 7.28944 16.2173 6.61355 16.9995 6.08838C17.9968 5.39143 19.1693 4.95214 20.4056 4.83674C19.9856 4.6716 19.552 4.52838 19.1058 4.40881C12.7042 2.69351 6.12412 6.4925 4.40882 12.8941C2.69352 19.2957 6.49251 25.8757 12.8941 27.591C19.2957 29.3063 25.8757 25.5073 27.591 19.1057ZM25.0461 20.2663C23.0255 24.5635 18.1597 26.9314 13.4117 25.6592C8.07708 24.2298 4.91125 18.7464 6.34067 13.4117C7.32782 9.72765 10.2484 7.07793 13.7182 6.26172C13.5538 6.46956 13.3982 6.68476 13.2519 6.90679C12.5287 8.00414 12.048 9.24325 11.8422 10.5413C11.6363 11.8393 11.71 13.1663 12.0582 14.4336C12.4064 15.7009 13.0212 16.8792 13.8615 17.8898C14.7017 18.9003 15.748 19.7199 16.9304 20.2935C18.1129 20.8672 19.4041 21.1819 20.7179 21.2164C22.0317 21.2509 23.3378 21.0045 24.5487 20.4937C24.7169 20.4227 24.8828 20.3469 25.0461 20.2663ZM25.8603 8.6141L25.3359 7L24.8114 8.6141L23.1143 8.6141L24.4873 9.61167L23.9629 11.2258L25.3359 10.2282L26.7089 11.2258L26.1845 9.61167L27.5575 8.6141L25.8603 8.6141ZM19.3359 7L19.8603 8.6141L21.5575 8.6141L20.1845 9.61167L20.7089 11.2258L19.3359 10.2282L17.9629 11.2258L18.4873 9.61167L17.1143 8.6141L18.8114 8.6141L19.3359 7ZM22.8603 12.6141L22.3359 11L21.8114 12.6141L20.1143 12.6141L21.4873 13.6117L20.9629 15.2258L22.3359 14.2282L23.7089 15.2258L23.1845 13.6117L24.5575 12.6141L22.8603 12.6141Z" fill="black"/>
</svg>
  )
}
export function Vejas_logo(){
  return(
    <svg className="vejas-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 10.9944L14.0001 10.9885L8.33939 10.9884L13.7693 9.02633L13.7688 9.02471C13.8727 8.9985 13.9804 8.98917 14.0875 8.99715C14.1016 8.99821 14.1157 8.99956 14.1298 9.00122L14.13 9.00125C14.2771 9.01857 14.4184 9.06835 14.5439 9.14699L14.5439 9.147C14.6694 9.22565 14.7759 9.33119 14.8556 9.456L14.8557 9.4562C14.9354 9.58102 14.9864 9.72199 15.0049 9.86892L15.005 9.8692C15.0235 10.0162 15.0092 10.1655 14.963 10.3062L14.963 10.3063C14.9168 10.4471 14.8398 10.5759 14.7378 10.6833L14.7377 10.6834C14.6356 10.7908 14.511 10.8742 14.3728 10.9275L14.3726 10.9276C14.3596 10.9326 14.3465 10.9373 14.3333 10.9418C14.226 10.9781 14.1133 10.9958 14.0001 10.9944ZM4 10.4296V12.9885L13.9796 12.9886C14.3586 12.9929 14.7355 12.9251 15.0903 12.7883L15.0905 12.7882C15.3605 12.684 15.6132 12.5415 15.8412 12.3657C15.9625 12.272 16.0768 12.169 16.183 12.0573L16.1831 12.0572C16.4886 11.7355 16.7189 11.3501 16.8573 10.9285L16.8573 10.9284C16.9956 10.5069 17.0386 10.0599 16.9831 9.61975L16.9831 9.61947C16.9275 9.1793 16.7749 8.75698 16.5362 8.38303L16.5361 8.38283C16.2974 8.00884 15.9785 7.6926 15.6026 7.45699L15.6026 7.45698C15.472 7.3751 15.3356 7.30367 15.1947 7.24314C14.9302 7.12949 14.65 7.05427 14.3625 7.02047L14.3623 7.02045C13.934 6.97012 13.5001 7.01297 13.0901 7.14589L13.0898 7.14504L13.0591 7.15612L13.0555 7.15734L13.0551 7.15748L13.0551 7.15757L4 10.4296ZM4 18.998V21.0525L17.2058 25.7506L17.2057 25.751C17.6836 25.9417 18.1977 26.0246 18.7113 25.9938C18.9088 25.982 19.1043 25.9534 19.2959 25.9088C19.6026 25.8373 19.8991 25.7245 20.1771 25.5728C20.6288 25.3264 21.0206 24.9833 21.3246 24.568C21.6286 24.1527 21.8372 23.6755 21.9357 23.1703C22.0342 22.6652 22.0201 22.1445 21.8943 21.6454C21.7686 21.1463 21.5344 20.6811 21.2083 20.283C21.0076 20.0379 20.7752 19.8219 20.5178 19.6404C20.357 19.527 20.1866 19.4271 20.008 19.3419C19.5443 19.1207 19.0376 19.0043 18.5239 19.0011V18.9981L4 18.998ZM18.5103 20.9983L9.8151 20.9982L17.9842 23.9045L17.9835 23.9065C18.1776 23.9782 18.3847 24.0089 18.5916 23.9964C18.8115 23.9833 19.0258 23.9217 19.2193 23.8162C19.4127 23.7106 19.5805 23.5637 19.7106 23.3859C19.8408 23.2081 19.9302 23.0037 19.9723 22.7874C20.0145 22.571 20.0085 22.3481 19.9546 22.1344C19.9008 21.9206 19.8005 21.7214 19.6608 21.5509C19.5212 21.3804 19.3457 21.2428 19.1468 21.1479C18.9483 21.0532 18.7312 21.0034 18.5112 21.002L18.5103 21.002L18.5103 21.0016L18.5103 20.9983ZM23.018 11.2481L23.0172 11.2486L22.0336 9.50716L22.0325 9.50515L22.0345 9.50404C22.567 9.2035 23.1613 9.02907 23.7718 8.99417C23.8603 8.98911 23.9489 8.987 24.0373 8.98783C24.559 8.99269 25.0757 9.09965 25.5579 9.3036C26.1218 9.54211 26.6234 9.90691 27.0241 10.3699C27.4248 10.8329 27.7139 11.3817 27.8692 11.974C28.0245 12.5664 28.0417 13.1865 27.9197 13.7866C27.7976 14.3867 27.5395 14.9508 27.1651 15.4353C26.8451 15.8497 26.4474 16.1964 25.9952 16.4568C25.9185 16.5009 25.8403 16.5425 25.7606 16.5816C25.2108 16.8512 24.6066 16.9909 23.9944 16.99V16.9897H4V14.9897H23.9972L23.9972 14.9876C24.303 14.988 24.6049 14.9182 24.8795 14.7836C25.1541 14.6489 25.3941 14.453 25.5811 14.2109C25.7681 13.9689 25.897 13.6871 25.958 13.3874C26.019 13.0876 26.0104 12.7778 25.9328 12.4819C25.8552 12.186 25.7108 11.9119 25.5106 11.6806C25.3105 11.4493 25.0599 11.2671 24.7782 11.1479C24.4966 11.0288 24.1913 10.9759 23.886 10.9934C23.581 11.0108 23.2841 11.098 23.018 11.2481Z" fill="black"/>
</svg>
  )
}
export function Dregna_logo(){
  return(
    <svg className="dregna-logo" width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4062 37.5457C42.4062 42.7401 37.2193 47.9375 29.5 47.9375C21.7807 47.9375 16.5938 42.7401 16.5938 37.5457C16.5938 32.1579 20.098 25.4482 24.2168 19.607C26.0784 16.9669 27.9467 14.6672 29.4078 12.9684C30.8966 14.7999 32.8285 17.2932 34.7534 20.1071C36.7603 23.0409 38.7124 26.2547 40.1507 29.3825C41.6154 32.5676 42.4062 35.3642 42.4062 37.5457ZM12.9062 37.5457C12.9062 27.5216 22.367 15.434 27.0013 10.1141C28.5046 8.38852 29.5 7.375 29.5 7.375C29.5 7.375 30.4537 8.4292 31.9037 10.1951C36.5024 15.7954 46.0938 28.5536 46.0938 37.5457C46.0938 45.3215 38.6645 51.625 29.5 51.625C20.3355 51.625 12.9062 45.3215 12.9062 37.5457ZM21.2001 31.3438H25.167C24.4206 33.0473 23.9688 34.6628 23.9688 36.0371C23.9688 38.1474 26.0331 40.5625 29.5 40.5625V44.25C24.4086 44.25 20.2812 40.573 20.2812 36.0371C20.2812 34.5235 20.6334 32.9293 21.2001 31.3438Z" fill="black"/>
    </svg>
  )
}


export function TemperaturosDiv(weatherData: { AMBIENT_TEMPERATURE: number; }){
    return(
        <div  className='pagrindinis-box' >
        <div className='main-info-box'>
          <p className='klaipeda-tekstas1'>KLAIPĖDA</p>
          <p className='klaipeda-tekstas2'>KLAIPĖDA</p>
          <p className='klaipeda-tekstas3'>KLAIPĖDA</p>
          <p className='laipsniai-main'>{(weatherData.AMBIENT_TEMPERATURE).toFixed(1)}°C</p> 
        </div>
        </div>
    )
      
}
export function VejasDiv(weatherData: { WIND_SPEED: number; WIND_GUST_SPEED: number; }){
    return(
        <div className='pagrindinis-box'>
        <div className='main-info-box'>
          <p className='klaipeda-tekstas1'>VĖJO GREITIS</p>
          <p className='klaipeda-tekstas2'>VĖJO GREITIS</p>
          <p className='klaipeda-tekstas3'>VĖJO GREITIS</p>
          <p className='laipsniai-main'>{(weatherData.WIND_SPEED/3.6).toFixed(1)}m/s</p> 
        </div>
        </div>
    )

}
export function DregmeDiv(weatherData: { RAINFALL: number; }){
    return(
        <div className='pagrindinis-box'>
        <div className='main-info-box'>
          <p className='klaipeda-tekstas1'>KRITULIAI</p>
          <p className='klaipeda-tekstas2'>KRITULIAI</p>
          <p className='klaipeda-tekstas3'>KRITULIAI</p>
          <p className='laipsniai-main'>{(weatherData.RAINFALL).toFixed(1)}mm</p> 
        </div>
        </div>
    )
  }
export function PapildomaDiv(weatherData: { AIR_PRESSURE: number; HUMIDITY: number; WIND_GUST_SPEED: number;}){
  return(
      <div className='pagrindinis-box'>
      <div className='main-info-box'>
        <p className='max-greitis'>ORO SLĖGIS</p>
        <p className='dregme'>MAX GREITIS</p>
        <p className='oro-kokybe'>DREGMĖ</p>
        <p className='oro-slegis-skaicius'>{(weatherData.AIR_PRESSURE).toFixed(1)}hPa</p> 
        <p className='max-greitis-skaicius'>{(weatherData.WIND_GUST_SPEED/3.6).toFixed(1)}m/s</p> 
        <p className='dregme-skaicius'>{(weatherData.HUMIDITY).toFixed(1)}%</p> 
      </div>
      </div>
  )
}

export function Telefonu_page(weatherData:{ f:number; AMBIENT_TEMPERATURE: number; WIND_SPEED: number; WIND_GUST_SPEED: number;  RAINFALL: number; AIR_PRESSURE: number; HUMIDITY: number;} ){
  //ORAI
  var today = new Date();
  var time = today.getHours();

  if (time >= 20)
  {
    document.body.style.background = "linear-gradient(0deg, #000000, #434343)";
  }  
  if (time >= 6 && time < 8)
  {
    document.body.style.background = "linear-gradient(0deg, #240b36, #c31432)";
  }    
  if (time >= 8 && time < 10)
  {
    document.body.style.background = "linear-gradient(0deg, #f12711, #f5af19";
  }    
  if (time >= 10 && time < 12)
  {
    document.body.style.background = "linear-gradient(0deg, #f4791f, #659999)";
  }    
  if (time >= 12 && time < 14)
  {
    document.body.style.background = "linear-gradient(0deg, #2980B9, #2980B9, #FFFFFF)";
  }    
  if (time >= 14 && time < 16)
  {
    document.body.style.background = "linear-gradient(0deg, #7F7FD5, #86A8E7, #91eae4)";
  }    
  if (time >= 16 && time < 18)
  {
    document.body.style.background = "linear-gradient(0deg, #355C7D, #6C5B7B, #c06c84";
  }    
  if (time >= 18 && time < 20)
  {
    document.body.style.background = "linear-gradient(0deg, #333333, #dd1818)";
  }    
    

  return (
    <div className='overlay'>
      <header className='pavadinimas-flex'>
        <h1 className='pavadinimas'>Ąžuolyno meteorologinė stotelė</h1>
      </header>
      <main>
         <div>
            <table className="table-center-css">
              <tbody>
                <tr>
                  <th colSpan={2}>
                  {
                    weatherData.f ===0 && <Saule_logo/>
                  }
                  {
                    weatherData.f ===1 &&<Lietus_logo/>
                  }
                  {
                    weatherData.f ===2 && <Vejas_logo/>
                  }
                  {
                    weatherData.f === 3 && <Naktis_logo/>
                  }
                  </th>
                </tr>
                <tr>
                  <th>
                  <p className='tekstas-telefono-informacijai'>TEMPERATŪRA</p>
                  </th>
                  <th>
                    <p className='tekstas-telefono-informacijai'>{(weatherData.AMBIENT_TEMPERATURE).toFixed(1)}°C</p>
                 </th>
                </tr>
                <tr>
                  <td>
                    <p className='tekstas-telefono-informacijai'>VĖJO GREITIS</p>
                  </td>
                  <td>
                    <p className='tekstas-telefono-informacijai'>{(weatherData.WIND_SPEED/3.6).toFixed(1)}m/s</p> 
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='tekstas-telefono-informacijai'>KRITULIAI</p>
                  </td>
                  <td>
                    <p className='tekstas-telefono-informacijai'>{(weatherData.RAINFALL).toFixed(1)}mm</p> 
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='tekstas-telefono-informacijai'>ORO SLĖGIS</p>
                  </td>
                  <td>
                   <p className='tekstas-telefono-informacijai'>{(weatherData.AIR_PRESSURE).toFixed(1)}hPa</p> 
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='tekstas-telefono-informacijai'>MAX GREITIS</p>
                  </td>
                  <td>
                    <p className='tekstas-telefono-informacijai'>{(weatherData.WIND_GUST_SPEED/3.6).toFixed(1)}m/s</p> 
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className='tekstas-telefono-informacijai'>DREGMĖ</p>
                  </td>
                  <td>
                   <p className='tekstas-telefono-informacijai'>{(weatherData.HUMIDITY).toFixed(1)}%</p> 
                  </td>
                </tr>
              </tbody>
            </table>
        </div> 
      </main>
      <footer>
        <p className='apacioje-tekstas'>D&J 2022</p>
      </footer>
    </div>
  );
}


export function Main_page(weatherData:{ logo:number; AMBIENT_TEMPERATURE: number; WIND_SPEED: number; WIND_GUST_SPEED: number;  RAINFALL: number; AIR_PRESSURE: number; HUMIDITY: number;}){
  //ORAI
  var today = new Date();
  var time = today.getHours();
  if (time >= 20)
  {
    document.body.style.background = "linear-gradient(0deg, #000000, #434343)";
  }  
  if (time >= 6 && time < 8)
  {
    document.body.style.background = "linear-gradient(0deg, #240b36, #c31432)";
  }    
  if (time >= 8 && time < 10)
  {
    document.body.style.background = "linear-gradient(0deg, #f12711, #f5af19";
  }    
  if (time >= 10 && time < 12)
  {
    document.body.style.background = "linear-gradient(0deg, #f4791f, #659999)";
  }    
  if (time >= 12 && time < 14)
  {
    document.body.style.background = "linear-gradient(0deg, #2980B9, #2980B9, #FFFFFF)";
  }    
  if (time >= 14 && time < 16)
  {
    document.body.style.background = "linear-gradient(0deg, #7F7FD5, #86A8E7, #91eae4)";
  }    
  if (time >= 16 && time < 18)
  {
    document.body.style.background = "linear-gradient(0deg, #355C7D, #6C5B7B, #c06c84";
  }    
  if (time >= 18 && time < 20)
  {
    document.body.style.background = "linear-gradient(0deg, #333333, #dd1818)";
  }    
    
  const [divisionas, keistiDiva] = useState(true)
  const [divisionas2, keistiDiva2] = useState(true)

  function switchTemp(){
    keistiDiva(true)
    keistiDiva2(true)
  }
  function switchDreg(){
    keistiDiva(true)
    keistiDiva2(false)
  }
  function switchVejas(){
    keistiDiva(false)
    keistiDiva2(true)
  }
  function switchLast(){
    keistiDiva(false)
    keistiDiva2(false)
  }
    
  return (
    <div className='overlay'>
      <header className='pavadinimas-flex'>
        <h1 className='pavadinimas'>Ąžuolyno meteorologinė stotelė</h1>
      </header>
      <main>
        <div>
        {
          divisionas ? divisionas2? <TemperaturosDiv AMBIENT_TEMPERATURE={weatherData.AMBIENT_TEMPERATURE}/> : <DregmeDiv RAINFALL={weatherData.RAINFALL}/> : divisionas2? <VejasDiv WIND_SPEED={weatherData.WIND_SPEED} WIND_GUST_SPEED= {weatherData.WIND_GUST_SPEED}/> : <PapildomaDiv AIR_PRESSURE={weatherData.AIR_PRESSURE} HUMIDITY={weatherData.HUMIDITY} WIND_GUST_SPEED={weatherData.WIND_GUST_SPEED} />
        } 
        </div>
        
        
        <div className='mygtukai-nav'>
          <button className='temperatura-mygtukas' onClick={switchTemp}>TEMPERATŪRA</button>
          <button className='vejas-mygtukas' onClick={switchVejas}>VĖJAS</button>  
          <button className='krituliai-mygtukas' onClick={switchDreg}>KRITULIAI</button>
          <button className='papildoma-mygtukas' onClick={switchLast}>PAPILDOMA</button>
        </div>  
        
      </main>
      <footer>
        <p className='apacioje-tekstas'>D&J 2022</p>
      </footer>
    </div>
  );
}
