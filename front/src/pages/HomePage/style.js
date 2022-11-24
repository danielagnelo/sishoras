import styled from 'styled-components';

const HomeStyle = styled.div`
    color: #000;
    margin: 0;
    padding: 0;
    .item1 { 
        //header
        grid-area: header;
        background: #fff;
        *{
            background: #f4f4f4;
        }
    }
    .item2 { 
        //nav
        grid-area: menu;
        
    }
    .item3 { 
        //container
        grid-area: main; 

    }
    .item5 { 
        //footer
        grid-area: footer; 
    }
    .item6{
        grid-area: logo;
    }

    /* .grid-container {
        background-color: #fff;
        overflow: hidden;
        box-sizing: border-box;
        display: grid;
        grid-template-areas:
            'menu header header header header header'
            'menu main main main main main'
            'footer footer footer footer footer footer';
            grid-template-rows: 100px 1fr 30px;
            grid-template-columns: 250px 1fr;
    } */
    .grid-container {
        display: grid;
        grid-template-columns: 225px 1fr;
        grid-template-rows: 100px; 1fr 100px;;
        grid-template-areas:
            "logo header"
            "menu main"
            "menu footer";
        height: 100vh;
        background-color: ;
    }

    .grid-container > div {
    background-color: inherit;
    text-align: start;
    font-size: 22px;
    }    
`;
export default HomeStyle;
