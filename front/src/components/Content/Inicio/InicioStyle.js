import styled from 'styled-components';

const InicioStyle = styled.div`
background: #f4f4f4;
    *{
        background: #f4f4f4;
    }
    .title{
        font-family: sans-serif;
        font-size: 3em;
        margin: 14px 0;
    }
    p{
        margin: 10px 0;
    }
    .table{
        width: 100%;          
       /*  background: #3B3B3B; */
        background: #1A2F3A;
    }
    tr th{
        color: #f4f4f4;
        background: #1A2F3A;      
        padding: 10px;  
    }
    tr td{
        text-align: center;
        padding: 5px;
    }
    input{
        border: 1px solid #c4c4c4;
        padding: 10px 5px;
        width: 100%;
        font-size: 12pt;

        width: 100%;
        height: 40px;
        border-radius: 3px;
    }
    button{
        padding: 10px 15px;
        border-radius: 3px;
        border: none;
        background: #1A2F3A;
        color: #fff;
        margin: 15px 0;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
        margin: 7px 2px;
    }
    button:hover{
        font-weight: 600;
        border: 1px solid;
        box-shadow: 3px 5px 7px #1A2F3A;
    }
    .btn-end{
        display: flex;
        justify-content: end;
    }
    .tripulante button{
        margin: 12px 5px;
        padding: 12px 20px;
    }
`;
export default InicioStyle;