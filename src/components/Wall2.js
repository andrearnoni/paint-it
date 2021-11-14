import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';

function Wall2({ validationMessage }) {
  const [wallWidth2, setWallWidth2] = useState('');
  const [wallHeight2, setWallHeight2] = useState('');
  const [door2, setDoor2] = useState('');
  const [window2, setWindow2] = useState('');

  const { setArea2, setLiters2 } = useContext(Context);

  const doorArea = 1.52;
  const windowArea = 2.4;
  const meterPerInk = 5;
  const doorsAndWindows = (door2 * doorArea) + (window2 * windowArea);
  const wallArea = wallWidth2 * wallHeight2;

  const calcTotalArea = () => {
    const doors = door2 * doorArea;
    const windows = window2 * windowArea;
    return wallArea - doors - windows;
  };

  const calcTotalLiters = () => {
    const totalArea = calcTotalArea(wallWidth2, wallHeight2, door2, window2);
    return totalArea / meterPerInk;
  };

  const showInfo = () => {
    const totalArea2 = calcTotalArea(wallWidth2, wallHeight2, door2, window2);
    const totalLiters2 = calcTotalLiters(wallWidth2, wallHeight2, door2, window2);
    setLiters2(totalLiters2);
    setArea2(totalArea2);
    setWallWidth2('');
    setWallHeight2('');
    setDoor2('');
    setWindow2('');
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'wallWidth2') {
      setWallWidth2(value);
    } else if (name === 'wallHeight2') {
      setWallHeight2(value);
    } else if (name === 'door2') {
      setDoor2(value);
    } else if (name === 'window2') {
      setWindow2(value);
    }
  };

  if (door2 >= 1 && wallHeight2 < 2.20) {
    const resetWallHeight = () => {
      setWallHeight2('');
      setDoor2('');
    };
    resetWallHeight();
    alert('Possuindo portas, a altura da parede deve ser de no mínimo 2.20 metros');
  }

  if (window2 && doorsAndWindows > wallArea) {
    const resetArea = () => {
      setWindow2('');
      setDoor2('');
    };
    resetArea();
    alert('A área de portas e janelas somadas não pode ultrapassar 50% da área da parede');
  }

  if (wallWidth2) {
    if (wallWidth2 < 1 || wallWidth2 > 15) {
      const resetWidth = () => {
        setWallWidth2('');
      };
      resetWidth();
      alert('A largura da parede deve ser entre 1 e 15 metros');
    }
  }

  if (wallHeight2) {
    if (wallHeight2 < 1 || wallHeight2 > 15) {
      const resetHeight = () => {
        setWallHeight2('');
      };
      resetHeight();
      alert('A Altura da parede deve ser entre 1 e 15 metros');
    }
  }

  return (
    <div>
      <form className="wall2__container">
        <h2 className="wall-title">Parede 2</h2>
        <label />
        Escolha a largura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallWidth2"
          value={ wallWidth2 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha a altura da parede:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="wallHeight2"
          value={ wallHeight2 }
          onChange={ handleChange }
          placeholder="Digite em metros (Ex: 1 ou 1.00)"
        />
        <label />
        Escolha a quantidade de portas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="door2"
          value={ door2 }
          onChange={ handleChange }
          placeholder="Digite por unidade (Ex: 1)"
        />
        <label />
        Escolha a quantidade de janelas:
        <input
          type="text"
          autoComplete="off"
          className="wall-input"
          name="window2"
          value={ window2 }
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

export default Wall2;
