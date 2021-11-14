import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';
import Wall1 from '../components/Wall1';
import Wall2 from '../components/Wall2';
import Wall3 from '../components/Wall3';
import Wall4 from '../components/Wall4';
import start from '../images/start.png';
import '../style/main.css';
import '../style/walls.css';
import Instructions from '../components/Instructions';

const Home = () => {
  const {
    area1,
    area2,
    area3,
    area4,
    liters1,
    liters2,
    liters3,
    liters4 } = useContext(Context);

  const [responseQuantity, setResponseQuantity] = useState('');

  const smallSize = 0.5;
  const mediumSize = 2.5;
  const largeSize = 3.6;
  const extraLargeSize = 18;
  const totalLiters = parseFloat(liters1 + liters2 + liters3 + liters4).toFixed(1);
  const totalArea = area1 + area2 + area3 + area4;

  const messageTotalArea = `* A área total calculada é de ${totalArea} m² sendo necessários ${totalLiters} litros de tinta`;

  const suggestionToBuy = (size) => {
    if (size === 0.5) {
      const quantityToBuy = Math.ceil(totalLiters / smallSize);
      return setResponseQuantity(`* Será necessário adquirir ${quantityToBuy} lata(s) de tinta na quantidade de ${smallSize} litros para pintar a área em questão`);
    } if (size === 2.5) {
      const quantityToBuy = Math.ceil(totalLiters / mediumSize);
      return setResponseQuantity(`* Será necessário adquirir ${quantityToBuy} lata(s) de tinta na quantidade de ${mediumSize} litros para pintar a área em questão`);
    } if (size === 3.6) {
      const quantityToBuy = Math.ceil(totalLiters / largeSize);
      return setResponseQuantity(`* Será necessário adquirir ${quantityToBuy} lata(s) de tinta na quantidade de ${largeSize} litros para pintar a área em questão`);
    } if (size === 18) {
      const quantityToBuy = Math.ceil(totalLiters / extraLargeSize);
      return setResponseQuantity(`* Será necessário adquirir ${quantityToBuy} lata(s) de tinta na quantidade de ${extraLargeSize} litros para pintar a área em questão`);
    }
    return setResponseQuantity('* Não é possível calcular a quantidade necessária');
  };

  const validationMessage = area1 > 0 && area2 > 0 && area3 > 0 && area4 > 0;

  return (
    <div className="main-background">
      <div className="hero__container">
        <h1 className="hero-title">Paint It!</h1>
        <div className="instructions__container">
          <Instructions />
          <a href="#walls__container" className="instructions-link"><input type="image" className="instructions-img" src={ start } alt="start button" /></a>
        </div>
      </div>
      <div className="walls__container" id="walls__container">
        <Wall1 validationMessage={ validationMessage } />
        <Wall2 validationMessage={ validationMessage } />
        <Wall3 validationMessage={ validationMessage } />
        <Wall4 validationMessage={ validationMessage } />
      </div>
      <div className="result__container" id="result__container">
        <p className="firstMessage">{ validationMessage && messageTotalArea }</p>
        <div className="choose__container">
          <h2 className="radio-title">Escolha a quantidade de litros por lata</h2>
          <form className="radio__container">
            <label htmlFor="size" />
            <input
              type="radio"
              id="size"
              name="size"
              value={ smallSize }
              onChange={ () => suggestionToBuy(0.5) }
            />
            0.5 Litros
            <label htmlFor="size" />
            <input
              type="radio"
              id="size"
              name="size"
              value={ mediumSize }
              onChange={ () => suggestionToBuy(2.5) }
            />
            2.5 Litros
            <label htmlFor="size" />
            <input
              type="radio"
              id="size"
              name="size"
              value={ largeSize }
              onChange={ () => suggestionToBuy(3.6) }
            />
            3.6 Litros
            <label htmlFor="size" />
            <input
              type="radio"
              id="size"
              name="size"
              value={ extraLargeSize }
              onChange={ () => suggestionToBuy(18) }
            />
            18 Litros
          </form>
        </div>
        <p className="secondMessage">{ responseQuantity }</p>
      </div>
    </div>
  );
};

export default Home;
