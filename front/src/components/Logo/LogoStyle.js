import styled from 'styled-components';

const LogoStyle = styled.h1`
    text-shadow: 4px 3px #558ABB;
    color: #fff;
    cursor: pointer;
    
    .logo{
        transition: 0.5s;
        font-size: 40px;
        padding: 22px 15px;
        background: #1A2F3A;
    };
    .logo:hover{
        opacity: 1;
        color: #007fff;
        text-shadow: 3px 2px 3px #f1f2f3;
    }
    
`;
export default LogoStyle;