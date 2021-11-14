import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';
import '../style/walls.css';

function Wall1({ validationMessage }) {
  const [wallWidth1, setWallWidth1] = useState('');
  const [wallHeight1, setWallHeight1] = useState('');
  const [door1, setDoor1] = useState('');
  const [window1, setWindow1] = useState('');

  const { setArea1, setLiters1 } = useContext(Context);

  const doorArea = 1.52;
  const windowArea = 2.4;
  const meterPerInk = 5;
  const doorsAndWindows = (door1 * doorArea) + (window1 * windowArea);
  const wallArea = wallWidth1 * wallHeight1;

  const calcTotalArea = () => {
    const doors = door1 * doorArea;
    const windows = window1 * windowArea;
    return wallArea - doors - windows;
  };

  const calcTotalLiters = () => {
    const totalArea = calcTotalArea(wallWidth1, wallHeight1, door1, window1);
    return totalArea / meterPerInk;
  };

  const showInfo = () => {
    const totalArea1 = calcTotalArea(wallWidth1, wallHeight1, door1, window1);
    const totalLiters1 = calcTotalLiters(wallWidth1, wallHeight1, door1, window1);
    setLiters1(totalLiters1);
    setArea1(totalArea1);
    setWallWidth1('');
    setWallHeight1('');
    setDoor1('');
    setWindow1('');
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'wallWidth1') {
      setWallWidth1(value);
    } else if (name === 'wallHeight1') {
      setWallHeight1(value);
    } else if (name === 'door1') {
      setDoor1(value);
    } else if (name === 'window1') {
      setWindow1(value);
    }
  };

  if (door1 >= 1 && wallHeight1 < 2.20) {
    const resetWallHeight = () => {
      setWallHeight1('');
      setDoor1('');
    };
    resetWallHeight();
    alert('Possuindo portas, a altura da parede deve ser de no mínimo 2.20 metros');
  }

  if (window1 && doorsAndWindows > wallArea) {
    const resetArea = () => {
      setWindow1('');
      setDoor1('');
    };
    resetArea();
    alert('A área de portas e janelas somadas não pode ultrapassar 50% da área da parede');
  }

  if (wallWidth1) {
    if (wallWidth1 < 1 || wallWidth1 > 15) {
      const resetWidth = () => {
        setWallWidth1('');
      };
      resetWidth();
      alert('A largura da parede deve ser entre 1 e 15 metros');
    }
  }

  if (wallHeight1) {
    if (wallHeight1 < 1 || wallHeight1 > 15) {
      const resetHeight = () => {
        setWallHeight1('');
      };
      resetHeight();
      alert('A Altura da parede deve ser entre 1 e 15 metros');
    }
  }

  return (
    <div>
      <form className="wall1__container">
        <h2 className="wall-title">Parede 1</h2>
        <label />
        Escolha a largura da parede:
        <input
          type="text"
          className="wall-input"
          name="wallWidth1"
          value={ wallWidth1 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha a altura da parede:
        <input
          type="text"
          className="wall-input"
          name="wallHeight1"
          value={ wallHeight1 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha a quantidade de portas:
        <input
          type="text"
          className="wall-input"
          name="door1"
          value={ door1 }
          onChange={ handleChange }
          placeholder="Digite por unidade (Ex: 1)"
        />
        <label />
        Escolha a quantidade de janelas:
        <input
          type="text"
          className="wall-input"
          name="window1"
          value={ window1 }
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

export default Wall1;
