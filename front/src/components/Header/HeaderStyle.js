import styled from 'styled-components';

const HeaderStyle = styled.div`  
    header {
        background-color: #fff;        
        padding: 15px;
        
        span{
            font-size: 2.3rem;
            padding: 0px 5px 0px 12px;
        }
        h1 {
            background: none;
            font-size: 1.7em;
        }
        p{
            color: rgba(0,0,0, .5);
            padding: 0 15px;
        }
        span{
            position: relative;
            top: 4px;
        }   
    }      
`;
export default HeaderStyle;