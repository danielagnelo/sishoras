import styled from 'styled-components';

const LoginStyle = styled.div`
body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../../../assets/jato-mb.JPG);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
    
}
form{
    background: none;
    width: auto;
    text-align: center;
    
}
input{
    display: flex;
    background: #fff;
    border-radius: 30px;
    padding: 20px;
    width: 450px;
    margin: 12px;
    border: none;
}
input:focus {
    border: 1px solid rgba(30, 139, 195);
    box-shadow: 6px 4px rgba(30, 139, 195, .5);

}
.input-wrong{
    border: 1px solid rgba(255, 40, 43);
    box-shadow: 2px 3px rgba(255, 40, 43, .8);
}
h1{
    font-size: 49px;
    background: none;
    color: #fff;
    padding: 12px;
    text-shadow: 2px 2px #000;
}
button{
    font-size: 20px;
    border-radius: 30px;
    background: #1e0bff;
    border: none;
    color: #fff;
    padding: 15px 40px;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.8s;
    text-shadow: 2px 2px #000;
}
button:hover{
    background: #fff;
    color: #1e0bff;
    text-shadow: 1px 1px #fff;
}
`;
export default LoginStyle;
