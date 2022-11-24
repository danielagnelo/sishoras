import React, { useState, useEffect } from 'react'
import FrvStyle from './FrvStyle';
import api from '../../../server/api';
import axios from 'axios';
import InicioStyle from '../Inicio/InicioStyle';

import { TbTrashX, TbPencil } from "react-icons/tb";

export default function Frv() {
  const [myData, setMyData] = useState();
  const [fitroTest, setFitroTest] = useState({});
  const [filtroState, setFiltroState] = useState('');
  const [tipos, setTipos] = useState([]);
  const [select, setSelect] = useState('SAR');
  const [elementoFiltrado, setElementoFiltrado] = useState({});
  const [identificador, setIdentificador] = useState(0);

  const initialState = {
    user: { posto: '', trigrama: '', nip: '', om: '', total: '', turno: '', funcao: '', instrumentacao: '', id: '' },
    /* frv: { numero: '', dataUltAlteracao: '', tempoVoado: '', esquadrao: '', tipoDeVoo: null, tripulantes: [] }, */
  }

  const ps = (PS) => {
    alert(PS)
  }
  useEffect(() => {
    api.get("/frvs").then((response) => setMyData(response.data));
    api.get("/tipos").then((response) => setTipos(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtro = myData.filter(variavel => variavel.id == filtroState)
    filtro ? setElementoFiltrado(filtro[0]) : setElementoFiltrado(myData[0])
    setFitroTest(filtro[0]);
  }

  const mudaTipo = () => {
    const url = `http://localhost:3001/frvs/${elementoFiltrado.id}`
    const data = {
      tipoDeVoo: select,
    }
    axios.patch(url, data)
    document.getElementById('close').style.zIndex = 1
  }

  const baseUrl = 'http://localhost:3001/frvs'


  const [estado, setEstado] = useState(initialState);

  const clear = () => {
    setEstado({ user: initialState.user })
  }

  const save = () => {
    const user = estado.user
    let tripulantes = elementoFiltrado.tripulantes
    const essaUrl = `http://localhost:3001/frvs/${elementoFiltrado.id}`
    if (user.id) {
      /*  if (tripulantes[user.id - 1] === 0) {
           tripulantes[user.id - 1] = 1
       } */
      console.log(tripulantes[user.id - 1]);
      tripulantes[user.id - 1] = user
      console.log(tripulantes[user.id - 1]);
      const data = {
        tripulantes
      }
      axios.patch(essaUrl, data).then(resp => {
        setEstado(initialState);
      })
    }
    /* if (elementoFiltrado.tripulante.length == 0) {
        user.id = 1
        tripulantes.push(user)
        axios.post(essaUrl, {
            user
        }).then(resp => {
            //console.log(tripulantes.length);
            setEstado({ frv: initialState.user, myData })
        })
    } */

    else {
      /* if (elementoFiltrado.tripulantes[0] == undefined) {
           setIdentificador(1)
       }
       else {
           console.log('Já havia algum tripulante nessa frv');
       }
       console.log(identificador); */
      let count = 1;

      elementoFiltrado.tripulantes.map(tripulante => {
        count = tripulante.id + 1
      })
      user.id = count
      tripulantes.push(user)
      //console.log(tripulantes);
      /* axios.post(essaUrl, {
          id: tripulantes.length,
          user
      }).then(resp => {
          //console.log(tripulantes.length);
          setEstado({ frv: initialState.user, myData })
      }) */
      const data = {
        tripulantes
      }
      axios.patch(essaUrl, data).then(resp => {
        setEstado(initialState);
      })
    }
    clear()
  }

  const getUpdatedList = (user, add = true) => {
    const list = myData.filter(u => u.id !== user.id)
    if (add) {
      myData.unshift(user)
    }
    return myData
  }

  const updateField = (event) => {
    const user = { ...estado.user }
    user[event.target.name] = event.target.value.toUpperCase()
    setEstado({ user })
  }

  const load = (user) => {
    setEstado({ user })
  }

  const remove = (user) => {
    const testeTripulantes = elementoFiltrado.tripulantes
    testeTripulantes.splice(testeTripulantes.indexOf(user), 1);
    const data = {
      tripulantes: testeTripulantes
    }
    axios.patch(`${baseUrl}/${elementoFiltrado.id}`, data).then(resp => {
      const list = getUpdatedList(user, false)
      setEstado({ user })
    })
  }

  return (
    <FrvStyle>
      <>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form">
            <div className="row">
              <div>ID FRV</div>
              <div className="form-group">
                <input type="text" className="form-input"
                  name="idFrv"
                  id="meuInput"
                  placeholder="Digite o ID da FRV..."
                  onChange={(e) => setFiltroState(e.target.value)} value={filtroState} />

              </div>
            </div>
            <hr className='hrFino' />
            <div className="row">
              <div className="btn-end">
                <button className="btn-search" type='submit'>
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </form>
        {!elementoFiltrado ?
          <>
            {setElementoFiltrado(myData[0])}
            {ps('FRV NÃO ENCONTRADA')}
          </>
          :
          elementoFiltrado.tipoDeVoo && elementoFiltrado.id ?
            <>
              <table className="table">
                <tr className='table-title'>
                  <th>Posto</th>
                  <th>Trigrama</th>
                  <th>Nip</th>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="form-control"
                      name="posto"
                      value={estado.user.posto}
                      onChange={e => updateField(e)}
                      placeholder="Digite o Posto/Graduação..." />
                  </td>
                  <td>
                    <input type="text" className="form-control"
                      name="trigrama"
                      value={estado.user.trigrama}
                      onChange={e => updateField(e)}
                      placeholder="Digite o Trigrama..." />
                  </td>
                  <td>
                    <input type="text" className="form-control"
                      name="nip"
                      value={estado.user.nip}
                      onChange={e => updateField(e)}
                      placeholder="Digite o Nip..." />
                  </td>
                </tr>
              </table>
              <table className="table">
                <tr className='table-title'>
                  <th>OM</th>
                  <th>Duração</th>
                  <th>Função</th>
                  <th>Turno</th>
                  <th>Instrumentação</th>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="form-control"
                      name="om"
                      value={estado.user.om}
                      onChange={e => updateField(e)}
                      placeholder="Digite a OM..." />
                  </td>
                  <td className="form-group">
                    <input type="text" className="form-control"
                      name="total"
                      value={estado.user.total}
                      onChange={e => updateField(e)}
                      placeholder="Digite a Duração do voo..." />
                  </td>
                  <td className="form-group">
                    <input type="text" className="form-control"
                      name="funcao"
                      value={estado.user.funcao}
                      onChange={e => updateField(e)}
                      placeholder="Digite a Função Exercida..." />
                  </td>
                  <td className="form-group">
                    <input type="text" className="form-control"
                      name="turno"
                      value={estado.user.turno}
                      onChange={e => updateField(e)}
                      placeholder="Digite o Turno do Voo..." />
                  </td>
                  <td className="form-group">
                    <input type="text" className="form-control"
                      name="instrumentacao"
                      value={estado.user.instrumentacao}
                      onChange={e => updateField(e)}
                      placeholder="Digite a Instrumentação Ut..." />
                  </td>
                </tr>
              </table>
              <div className="btn-end btn tripulante">
                <div className="col-12 d-flex justify-content-end">
                  <button className="btn btn-primary"
                    onClick={e => save(estado)}>
                    Salvar
                  </button>
                  <button className="btn btn-secundary ml-2"
                    onClick={e => clear('')}>
                    Cancelar
                  </button>
                </div>
              </div>
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
                    <td>{elementoFiltrado.numero}</td>
                    <td>{elementoFiltrado.dataUltAlteracao}</td>
                    <td>{elementoFiltrado.tempoVoado}</td>
                    <td>{elementoFiltrado.esquadrao}</td>
                    {elementoFiltrado.tipoDeVoo ? <td>{elementoFiltrado.tipoDeVoo}</td> : <td>Não Cadastrado</td>}
                    <td>{elementoFiltrado.instrumentacao}</td>
                  </tr>
                </table>
                {elementoFiltrado.tripulantes != [] ?
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

                      {elementoFiltrado.tripulantes.map(user => {
                        return (
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
                                onClick={e => load(user)}>
                                <TbPencil className='tbIcon' />
                              </button>
                              <button className="btn-acoes" title='Remover'
                                onClick={e => remove(user)}>
                                <TbTrashX className='tbIcon' />
                              </button>
                            </td>
                          </tr>)
                      })}
                    </table>

                    <div className="btn-end btn tripulante">
                      <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                          onClick={e => ps('FRV COMITADA COM SUCESSO!') + window.location.reload()}>
                          Comitar FRV
                        </button>
                      </div>
                    </div>

                  </div>
                  :
                  <div>blá-blá-blá</div>
                }
              </div>
            </>
            :
            <div className='container'>
              <table className="table">
                <tr className='table-title'>
                  <th>Nº FRV</th>
                  <th>Última Alteração</th>
                  <th>Tempo de Voo</th>
                  <th>Esquadrão</th>
                  <th>Tipo de Voo</th>
                </tr>
                {elementoFiltrado.id != null || undefined ?
                  <tr className='table-content'>
                    <td>{elementoFiltrado.numero}</td>
                    <td>{elementoFiltrado.dataUltAlteracao}</td>
                    <td>{elementoFiltrado.tempoVoado}</td>
                    <td>{elementoFiltrado.esquadrao}</td>
                    {elementoFiltrado.tipoDeVoo
                      ?
                      <td>{elementoFiltrado.tipoDeVoo}</td>
                      :
                      <td>
                        <select className="mt-3" name='id_tipo' id='inputTipo' label="Tipo de Voo" onChange={(e) => setSelect(e.target.value)}>
                          {tipos.map((tipo) => {
                            return (
                              <option key={tipo.id} value={tipo.name}>
                                {tipo.name}
                              </option>
                            )
                          })}
                        </select>
                      </td>}
                  </tr>
                  :
                  <tr>
                    <td>000000</td>
                    <td>00/00/00 00:00:00</td>
                    <td>0.0</td>
                    <td>SISLOGWEB</td>
                    <td>OPE GTI</td>
                  </tr>
                }
              </table>
              {elementoFiltrado.id != null || undefined ?
                <div className="row" onSubmit={handleSubmit}>
                  <div className="btn-end">
                    <button className="btn-search" type='submit' onClick={mudaTipo}>
                      Cadastrar
                    </button>
                  </div>
                </div> : ''}
            </div>}
      </>
    </FrvStyle >
  )
}
