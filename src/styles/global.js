import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus{
  outline: 0;
}

html, body, #root {
  height: 100%
}
body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}
a{
  text-decoration: none;
}
button{
  cursor: pointer;
}

.authForm{ 
  display: flex;
  flex-direction: column;
  margin-top: 30px; 
}
`;
