import styled from 'styled-components';

const FrvStyle = styled.div`
    *{
        background: #f4f4f4;
    }
    .form-input{
        width: 100%;
        height: 40px;
        border-radius: 3px;
        border: 1px solid #b0b0b0;
        padding: 10px;
    }
    .btn-search{
        padding: 10px 15px;
        border-radius: 3px;
        border: none;
        background: #1A2F3A;
        color: #fff;
        margin: 15px 0;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
    }
    .btn-search:hover{
        font-weight: 600;
        border: 1px solid;
        box-shadow: 3px 5px 7px #1A2F3A;
    }
    .btn-end{
        display: flex;
        justify-content: end;
    }
    hr{
        margin: 10px 0;
    }
    
    hr.hrFino{       
        border: 1px solid #c4c4c4;
    }
    select{
        border: 1px solid #1A2F3A;
        border-radius: 3px;
        padding: 15px 3px;
        width:120px;
        font-size: 14pt;
        font-weight: bolder;
        background: #1A2F3A;
        color: #fff;
        option{
            background: #1A2F3A;
        }
        transition: 0.3s;
    }
    select:hover{
        cursor: pointer;
        opacity: 0.9;
        transition: 0.5s;
    }
    .table{
        width: 100%;
        background: #3B3B3B;
    }
    .table-title th{
        background: #1A2F3A;
        color: #fff;
        padding: 20px;
    }
    td{
        text-align: center;
        padding: 15px;
    }    
    .table{
        width: 100%;          
        background: #1A2F3A;
    }
    input{
        border: 1px solid #c4c4c4;
        padding: 10px 5px;
        width: 100%;
        font-size: 12pt;

        width: 100%;
        border-radius: 3px;
    }
    button{
        padding: 10px 15px;
        border-radius: 3px;
        border: none;
        background: #1A2F3A;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
        margin: 15px 2px;
    }
    .tbIcon{
        font-size: 17pt;
        background: none;
    }
    button:hover{
        font-weight: 600;
        border: 1px solid;
        box-shadow: 3px 5px 7px #1A2F3A;
    }   
    tr td{
        text-align: center;
        padding: 5px;
    }
    
`;
export default FrvStyle;