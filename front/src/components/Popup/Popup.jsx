import React from 'react'
import PopupStyle from './PopupStyle';

export default function Popup() {
    const closePopup = () => {
        document.getElementById('close').style.zIndex = -1
        window.location.reload();
    }
    return (
        <PopupStyle>
            <div className="popup-container" id="close">
                <div className="popup">
                    <button className="popup-close" onClick={e => closePopup(e)}><span>x</span></button>
                    <div className="popup-content">
                        <h4>Item cadastrado e enviado com sucesso!</h4>
                        <p>Desenvolvido por CB-MV Agnelo</p>
                    </div>
                </div>
            </div>
        </PopupStyle>

    )
}
