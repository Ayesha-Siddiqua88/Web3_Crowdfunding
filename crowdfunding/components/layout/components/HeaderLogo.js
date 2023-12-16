import styled from 'styled-components';


const HeaderLogo = () => {
  return (
    <Logo>FundFuturo</Logo>
    
  )
}

const Logo = styled.h1`
  font-weight: normal;
  margin-left: 25px;
  font-family: 'Anton'; 
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 37px;
  /* background: -webkit-linear-gradient(#8B0202, #520202);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

`

export default HeaderLogo