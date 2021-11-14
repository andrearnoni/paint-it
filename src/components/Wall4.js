import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';

function Wall4({ validationMessage }) {
  const [wallWidth4, setWallWidth4] = useState('');
  const [wallHeight4, setWallHeight4] = useState('');
  const [door4, setDoor4] = useState('');
  const [window4, setWindow4] = useState('');

  const { setArea4, setLiters4 } = useContext(Context);

  const doorArea = 1.52;
  const windowArea = 2.4;
  const meterPerInk = 5;
  const doorsAndWindows = (door4 * doorArea) + (window4 * windowArea);
  const wallArea = wallWidth4 * wallHeight4;

  const calcTotalArea = () => {
    const doors = door4 * doorArea;
    const windows = window4 * windowArea;
    return wallArea - doors - windows;
  };

  const calcTotalLiters = () => {
    const totalArea = calcTotalArea(wallWidth4, wallHeight4, door4, window4);
    return totalArea / meterPerInk;
  };

  const showInfo = () => {
    const totalArea4 = calcTotalArea(wallWidth4, wallHeight4, door4, window4);
    const totalLiters4 = calcTotalLiters(wallWidth4, wallHeight4, door4, window4);
    setLiters4(totalLiters4);
    setArea4(totalArea4);
    setWallWidth4('');
    setWallHeight4('');
    setDoor4('');
    setWindow4('');
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'wallWidth4') {
      setWallWidth4(value);
    } else if (name === 'wallHeight4') {
      setWallHeight4(value);
    } else if (name === 'door4') {
      setDoor4(value);
    } else if (name === 'window4') {
      setWindow4(value);
    }
  };

  if (door4 >= 1 && wallHeight4 < 2.20) {
    const resetWallHeight = () => {
      setWallHeight4('');
      setDoor4('');
    };
    resetWallHeight();
    alert('Possuindo portas, a altura da parede deve ser de no mínimo 2.20 metros');
  }

  if (window4 && doorsAndWindows > wallArea) {
    const resetArea = () => {
      setWindow4('');
      setDoor4('');
    };
    resetArea();
    alert('A área de portas e janelas somadas não pode ultrapassar 50% da área da parede');
  }

  if (wallWidth4) {
    if (wallWidth4 < 1 || wallWidth4 > 15) {
      const resetWidth = () => {
        setWallWidth4('');
      };
      resetWidth();
      alert('A largura da parede deve ser entre 1 e 15 metros');
    }
  }

  if (wallHeight4) {
    if (wallHeight4 < 1 || wallHeight4 > 15) {
      const resetHeight = () => {
        setWallHeight4('');
      };
      resetHeight();
      alert('A Altura da parede deve ser entre 1 e 15 metros');
    }
  }

  return (
    <div>
      <form className="wall4__container">
        <h2 className="wall-title">Parede 4</h2>
        <label />
        {' '}
        Escolha a largura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallWidth4"
          value={ wallWidth4 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        {' '}
        Escolha a altura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallHeight4"
          value={ wallHeight4 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        {' '}
        Escolha o número de portas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="door4"
          value={ door4 }
          onChange={ handleChange }
          placeholder="Digite por unidade (Ex: 1)"
        />
        <label />
        {' '}
        Escolha o número de janelas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="window4"
          value={ window4 }
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

export default Wall4;
