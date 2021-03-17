# BYOB: Be Your Own Boss
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![LinkedIn][linkedin-shield-2]][linkedin-url-2]

*BYOB is developed with a vision of expanding the idea of freelancing from just hiring developers to day-to-day chores such as electrician, plumbing etcetra. We, at BYOB, aim to provide the easiest user interface; allowing users with minimal technical knowledge to work with ease.*

#### Check out our website: http://peaceful-oasis-65710.herokuapp.com/

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://i.ibb.co/xmtWfZW/Screenshot-from-2021-01-02-11-52-17.png)

We provide an online portal, wherein, prospective employers can post jobs:temporary or permanent. The employers can expect a list of suitable employees who are just a call away.
And for the employees, they can browse through a variety of jobs that match their skill-set. They will find a suitable work that interests them and also pays well, without much hassle.


## Built With

### Frontend

* [ReactJs](https://reactjs.org/docs/getting-started.html)
* [JQuery](https://api.jquery.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [HTML](https://www.w3schools.com/TAGS/default.ASP)
* [CSS](https://devdocs.io/css/)

### Backend

* [NodeJs](https://nodejs.org/en/docs/)
* [MongoDB](https://docs.mongodb.com/)
* [Express](http://expressjs.com/en/api.html)
* [Mongoose](https://mongoosejs.com/docs/api.html)

### IDE: [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

### Prerequisites

* NodeJs: v.14.15.1 or above
* Express-jwt: v.6.0.0 or above
* Mongoose: v.5.11.3 or above
* React: v.17.0.1 or above

### Installation

1. Clone the repository : 
```sh
   git clone https://github.com/gunjan543/Freelance
   ```
2. Install NPM packages :
  Backend:
  ```sh
  npm init
  ```
  ```sh
  cd client
  npm init
  ```
3. Enter your API keys in `config/config.env` and `client/config.env`:

  ```
  API_KEY = 'ENTER YOUR API';
  ```
  
4. Run Server:
  
  Backend Server:
  ```sh
  npm run dev
  ```
  or
  ```sh
  nodemon server.js
  ```
  Frontend Server:
  
  ```sh
  cd client
  npm start
  ```
  
  ## Usage
  
  #### 1. For Employers:
  ##### Find suitable Employee for your work.
  *The employers register and login on our portal, and post as many jobs as they wish to. The employers are required to give necessary details about the job.
  On posting the job, the employers will be notified about any interested applicants for all the jobs they posted.*
    [![EmployerDashboard][employer-screenshot]](https://linkpicture.com/q/Screenshot-from-2021-01-02-12-38-56.png)
  
  
  #### 2. For Employees:
  ##### Find perfect jobs depending upon your skillset.
  *The employees just need to sign up and scroll through a list of jobs that interest them and just simply apply and wait to hear from their employers!*
   [![EmployeeDashboard][employee-screenshot]](https://linkpicture.com/q/Screenshot-from-2021-01-02-12-47-45.png)


## Contact

* Mail us at: byobfreelance@gmail.com

* Aditi - 
Email: aditisingh1400@gmail.com
Linkedin: https://www.linkedin.com/in/aditi-singh-0081451ab/

* Gunjan - 
Email: gunjanagarwal54321@gmail.com
Linkedin: https://www.linkedin.com/in/gunjan-agarwal-7b0109168/


[contributors-shield]: https://img.shields.io/github/contributors/gunjan543/Freelance?color=rgb&style=for-the-badge
[contributors-url]: https://github.com/gunjan543/Freelance/graphs/contributors
[linkedin-shield]:https://img.shields.io/badge/Aditi-Linkedin-blue?style=for-the-badge&logo=appveyor
[linkedin-url]:https://www.linkedin.com/in/aditi-singh-0081451ab/
[linkedin-shield-2]:https://img.shields.io/badge/Gunjan-Linkedin-blue?style=for-the-badge&logo=appveyor
[linkedin-url-2]:https://www.linkedin.com/in/gunjan-agarwal-7b0109168/
[employer-screenshot]:https://linkpicture.com/q/Screenshot-from-2021-01-02-12-38-56.png
[employee-screenshot]:https://linkpicture.com/q/Screenshot-from-2021-01-02-12-47-45.png
[product-screenshot]: https://i.ibb.co/xmtWfZW/Screenshot-from-2021-01-02-11-52-17.png
