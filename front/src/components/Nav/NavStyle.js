import styled from 'styled-components';

const NavStyle = styled.div`
    color: #000;
    background: #1A2F3A;
    display: grid;
    height: 100%;
    position: relative;
    right: 0px;
    span{
        
    }
    .button{
        background: #1A2F3A;
        font-size: 12pt;
        border-radius: 20px;
        text-shadow: none;
        color: #fff;
        cursor: pointer;
        padding: 10px 15px;
        transition: 0.3s;
        position: fixed;
        bottom: 10px;
        left: 70px;        
        *{
            background: none;
        }
    }
    .button:hover{
        background: #fff;
        color: #1A2F3A;
    }
    div{
        background: none;
    }
    .topicos{
        color: #fff;
        font-size: 26px;
        text-align: start;        
        
        div{
            background: none;
            padding: 10px 0;
            transition: 0.3s;
            cursor: pointer;
            *{
                background: none;
                margin: 0 15px;
            }            
        }
        div:hover{
            background: #f4f4f4;
            color: #1A2F3A;
        }
    }
`;
export default NavStyle;