import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';

function Wall3({ validationMessage }) {
  const [wallWidth3, setWallWidth3] = useState('');
  const [wallHeight3, setWallHeight3] = useState('');
  const [door3, setDoor3] = useState('');
  const [window3, setWindow3] = useState('');

  const { setArea3, setLiters3 } = useContext(Context);

  const doorArea = 1.52;
  const windowArea = 2.4;
  const meterPerInk = 5;
  const doorsAndWindows = (door3 * doorArea) + (window3 * windowArea);
  const wallArea = wallWidth3 * wallHeight3;

  const calcTotalArea = () => {
    const doors = door3 * doorArea;
    const windows = window3 * windowArea;
    return wallArea - doors - windows;
  };

  const calcTotalLiters = () => {
    const totalArea = calcTotalArea(wallWidth3, wallHeight3, door3, window3);
    return totalArea / meterPerInk;
  };

  const showInfo = () => {
    const totalArea3 = calcTotalArea(wallWidth3, wallHeight3, door3, window3);
    const totalLiters3 = calcTotalLiters(wallWidth3, wallHeight3, door3, window3);
    setLiters3(totalLiters3);
    setArea3(totalArea3);
    setWallWidth3('');
    setWallHeight3('');
    setDoor3('');
    setWindow3('');
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'wallWidth3') {
      setWallWidth3(value);
    } else if (name === 'wallHeight3') {
      setWallHeight3(value);
    } else if (name === 'door3') {
      setDoor3(value);
    } else if (name === 'window3') {
      setWindow3(value);
    }
  };

  if (door3 >= 1 && wallHeight3 < 2.20) {
    const resetWallHeight = () => {
      setWallHeight3('');
      setDoor3('');
    };
    resetWallHeight();
    alert('Possuindo portas, a altura da parede deve ser de no mínimo 2.20 metros');
  }

  if (window3 && doorsAndWindows > wallArea) {
    const resetArea = () => {
      setWindow3('');
      setDoor3('');
    };
    resetArea();
    alert('A área de portas e janelas somadas não pode ultrapassar 50% da área da parede');
  }

  if (wallWidth3) {
    if (wallWidth3 < 1 || wallWidth3 > 15) {
      const resetWidth = () => {
        setWallWidth3('');
      };
      resetWidth();
      alert('A largura da parede deve ser entre 1 e 15 metros');
    }
  }

  if (wallHeight3) {
    if (wallHeight3 < 1 || wallHeight3 > 15) {
      const resetHeight = () => {
        setWallHeight3('');
      };
      resetHeight();
      alert('A Altura da parede deve ser entre 1 e 15 metros');
    }
  }

  return (
    <div>
      <form className="wall3__container">
        <h2 className="wall-title">Parede 3</h2>
        <label />
        Escolha a largura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallWidth3"
          value={ wallWidth3 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha a altura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallHeight3"
          value={ wallHeight3 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha o número de portas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="door3"
          value={ door3 }
          onChange={ handleChange }
          placeholder="Digite por unidade (Ex: 1)"
        />
        <label />
        Escolha o número de janelas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="window3"
          value={ window3 }
          onChange={ handleChange }
          placeholder="Digite por unidade (Ex: 1)"
        />
        <a
          href={ validationMessage && '#result__container' }
          className="wall-button1"
          onClick={ () => showInfo() }
        >
          Inserir dados da parede 1
        </a>
      </form>
    </div>
  );
}

export default Wall3;
