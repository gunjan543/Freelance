import React from 'react';
import { Component } from 'react';
import './styles.css';
export default class navbar2 extends Component{
  
  constructor(props){
    super(props);
    let {category} = JSON.parse(localStorage.getItem('user'));
    let {subCategory} = JSON.parse(localStorage.getItem('user'));
    this.state = {
      category:category,
      subCategory:subCategory
    }
  }
    componentDidMount(){
      const script = document.createElement("script");
      script.src = "./theme.js";
      script.async = true;
      document.body.appendChild(script);
    }
   

    render(){
      console.log(this.state.category);
        return(
          <div>
          {
            this.state.category === 'employee' ?
             this.state.subCategory==='Non Technical' ? 
             <div>
             <nav class="navbar2">
            <ul class="navbar2-nav">
            <li class="logo2">
            <a href="#" class="nav2-link">
          <span class="link2-text logo2-text">BYOB</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/nonTechnical" class="nav2-link">
        <svg
         aria-hidden="true"
          focusable="false" 
          data-prefix="fas" 
          data-icon="home"
           class="svg-inline--fa fa-home fa-w-18" 
           role="img" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 576 512"
           >
          <path 
          fill="currentColor" 
          class="fa-secondary"
          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path></svg>
          <span class="link2-text">Home</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/nonTechnical/EmployeeNonTechProfile" class="nav2-link">
        <svg 
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="user-alt" 
        class="svg-inline--fa fa-user-alt fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        >
        <path 
        fill="currentColor" 
        class="fa-secondary"
        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
        ></path></svg>
          <span class="link2-text">Profile</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/nonTechnical/help" class="nav2-link">
        <svg 
        aria-hidden="true"
        focusable="false" 
        data-prefix="fas" 
        data-icon="question-circle"
        class="svg-inline--fa fa-question-circle fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        ><path 
        fill="currentColor"
        class="fa-secondary"
        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
        ></path></svg>
          <span class="link2-text">Help</span>
        </a>
      </li>
      </ul>
  </nav>
  </div>
          :
          <div>
          <nav class="navbar2">
    <ul class="navbar2-nav">
      <li class="logo2">
        <a href="#" class="nav2-link">
          <span class="link2-text logo2-text">BYOB</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employeeDash/technical" class="nav2-link">
        <svg
         aria-hidden="true"
          focusable="false" 
          data-prefix="fas" 
          data-icon="home"
           class="svg-inline--fa fa-home fa-w-18" 
           role="img" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 576 512"
           >
          <path 
          fill="currentColor" 
          class="fa-secondary"
          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path></svg>
          <span class="link2-text">Home</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employeeDash/technical/EmployeeTechProfile" class="nav2-link">
        <svg 
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="user-alt" 
        class="svg-inline--fa fa-user-alt fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        >
        <path 
        fill="currentColor" 
        class="fa-secondary"
        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
        ></path></svg>
          <span class="link2-text">Profile</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employeeDash/technical/help" class="nav2-link">
        <svg 
        aria-hidden="true"
        focusable="false" 
        data-prefix="fas" 
        data-icon="question-circle"
        class="svg-inline--fa fa-question-circle fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        ><path 
        fill="currentColor"
        class="fa-secondary"
        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
        ></path></svg>
          <span class="link2-text">Help</span>
        </a>
      </li>
      </ul>
  </nav>
  </div>
          :
          <div>
    <nav class="navbar2">
    <ul class="navbar2-nav">
      <li class="logo2">
        <a href="#" class="nav2-link">
          <span class="link2-text logo2-text">BYOB</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employerDash" class="nav2-link">
        <svg
         aria-hidden="true"
          focusable="false" 
          data-prefix="fas" 
          data-icon="home"
           class="svg-inline--fa fa-home fa-w-18" 
           role="img" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 576 512"
           >
          <path 
          fill="currentColor" 
          class="fa-secondary"
          d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path></svg>
          <span class="link2-text">Home</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employerDash/employerProfile" class="nav2-link">
        <svg 
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="user-alt" 
        class="svg-inline--fa fa-user-alt fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        >
        <path 
        fill="currentColor" 
        class="fa-secondary"
        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
        ></path></svg>
          <span class="link2-text">Profile</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employerDash/requests" class="nav2-link">
        <svg 
        aria-hidden="true"
        focusable="false"
        data-prefix="fas" 
        data-icon="business-time" 
        class="svg-inline--fa fa-business-time fa-w-20" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512"
        >
        <path 
        fill="currentColor" 
        class="fa-secondary"
        d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"
        ></path></svg>
          <span class="link2-text">Requests</span>
        </a>
      </li>

      <li class="nav2-item">
        <a href="/employerDash/help" class="nav2-link">
        <svg 
        aria-hidden="true"
        focusable="false" 
        data-prefix="fas" 
        data-icon="question-circle"
        class="svg-inline--fa fa-question-circle fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        ><path 
        fill="currentColor"
        class="fa-secondary"
        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
        ></path></svg>
          <span class="link2-text">Help</span>
        </a>
      </li>
      </ul>
  </nav>
  </div>
    }
  </div>
        )
    }
    
}