import { ButtonToolbar } from "react-bootstrap";

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }

  const buttons=document.querySelectorAll('a');
  buttons.forEach(btn =>{
  btn.addEventListener('click',function(e){
      let x=e.clientX-e.target.offsetLeft;
      let y=e.clientY-e.target.offsetTop;
      let ripples=document.createElement('span');
      ripples.style.left=x+'px';
      ripples.style.top=y+'px';
      this.appendChild(ripples);
  })
})
  document.getElementById('themeButton').onclick = toggleTheme;