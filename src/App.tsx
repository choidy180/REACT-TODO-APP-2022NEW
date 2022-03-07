import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";
import TodoList from "./components/TodoList";



const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  ${reset};
  @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  *{
    font-family: 'NEXON Lv2 Gothic';
  }
  body{
    background-color: ${props => props.theme.bgColor} ;
    color: ${props => props.theme.textColor}
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoList/>
    </>
  );
}

export default App;
