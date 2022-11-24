import React, { useState, useEffect } from 'react'
import api from '../../../server/api';
import TripulanteStyle from './TripulanteStyle'
import axios from 'axios'
import InicioStyle from '../Inicio/InicioStyle';
import { TbTrashX, TbPencil } from "react-icons/tb";




export default function Tripulante() {

  let frvsTripuladas = []
  const [user, setUser] = useState(null);
  const [myData, setMyData] = useState();
  const [inFrv, setInFrv] = useState([]);
  const [frvTripuladas, setFrvTripuladas] = useState();
  const recoveredUser = localStorage.getItem('user');
  let minhasFrv = []
  useEffect(() => {
    async function fetchAPI() {
      if (recoveredUser != null) {
        setUser(JSON.parse(recoveredUser));
      }
    }
    fetchAPI()
  }, [recoveredUser]);

  useEffect(() => {
    api.get("/frvs").then((response) => setMyData(response.data));
  }, []);
  useEffect(() => {
    let frvsTripuladas = []
    if (myData) {
      myData.map(frv => {
        frv.tripulantes[0] ? frvsTripuladas.push(frv) : <></>
      })
    }
  }, []);

  /* const filtraMeusDados = () => {
    let frvsTripuladas = []
    myData.map(frv => {
      frv.tripulantes[0] ? frvsTripuladas.push(frv) : <></>
    })
    return frvsTripuladas
  } */
  //filtraMeusDados()

  return (
    <TripulanteStyle>
      <InicioStyle>
        {
          user ?
            <>
              <div className='container'>
                <table className="table">
                  <tr className='table-title'>
                    <th>Nº FRV</th>
                    <th>Última Alteração</th>
                    <th>Tempo de Voo</th>
                    <th>Esquadrão</th>
                    <th>Tipo de Voo</th>
                    <th>Instrumentação</th>
                  </tr>
                  <tr>
                    <td>{user.numero}</td>
                    <td>{user.dataUltAlteracao}</td>
                    <td>{user.tempoVoado}</td>
                    <td>{user.esquadrao}</td>
                    {user.tipoDeVoo ? <td>{user.tipoDeVoo}</td> : <td>Não Cadastrado</td>}
                    <td>{user.instrumentacao}</td>
                  </tr>
                </table>
                <div>
                  <table className="table ">
                    <tr className='table-title'>
                      <th>Posto</th>
                      <th>Trigrama</th>
                      <th>NIP</th>
                      <th>OM</th>
                      <th>Total</th>
                      <th>Função</th>
                      <th>Turno</th>
                      <th>Instrumentação</th>
                      <th>Ações</th>
                    </tr>

                    <tr key={user.id}>
                      <td>{user.posto}</td>
                      <td>{user.trigrama}</td>
                      <td>{user.nip}</td>
                      <td>{user.om}</td>
                      <td>{user.total}</td>
                      <td>{user.funcao}</td>
                      <td>{user.turno}</td>
                      <td>{user.instrumentacao}</td>
                      <td>
                        <button className="btn-acoes" title='Editar'
                          onClick={e => console.log(inFrv)}
                        >
                          <TbPencil className='tbIcon' />
                        </button>
                        <button className="btn-acoes" title='Remover'
                        //onClick={e => remove(user)}
                        >
                          <TbTrashX className='tbIcon' />
                        </button>
                      </td>
                    </tr>
                  </table>
                  <div className="btn-end btn tripulante">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary"
                      //onClick={e => ps('FRV COMITADA COM SUCESSO!') + window.location.reload()}
                      >
                        Comitar FRV
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </>

            : ''
        }
      </InicioStyle>
    </TripulanteStyle>
  )
}
