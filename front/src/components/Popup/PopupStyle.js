import styled from 'styled-components';

const PopupStyle = styled.div`
    .popup-container {
        position: fixed;
        display: flex;
        background-color: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100vh;
        z-index: -1;
        color: #fff;
        align-items: center;
        justify-content: center;

        padding: 0;
        margin: 0;
    }

    .popup {
        background: #808080;
        border: solid 5px #606060;
        border-radius: 10px;
        width: 530px;
        padding: 10px 10px;

    }

    .popup-close {
        font-size: 45px;
        color: #f14747;
        cursor: pointer;
        position: fixed;
        right: 420px;
        top: 240px;
        transition: .3s;
        background-color: #606060;
        border: none;
        border-radius: 50%;
        margin: 0;
        padding: 0px 20px;
    }

    h4 {
        margin: 20px 20px;
        font-size: 40px;
        background: inherit;
    }

    button {
        background: #808080;
    }
    span{
        background: none;
        position: relative;
        bottom: 5px;
    }

    .popup-close:hover {
        font-size: 40px;
        transform: rotate(360deg);


        border: outset;
    }


    .to-close {
        z-index: -1;
    }

    .popup-content {
        padding: 0;
        margin: 0;
        
        background: none;
    }

    .popup-content p {
        margin: 0;
        font-size: 18px;        
        background: none;
    }
    
`;
export default PopupStyle;
