import React from 'react';
import '../style/instructions.css';

function Instructions() {
  return (
    <div>
      <h2 className="instructions__title">Instruções de preenchimento</h2>
      <ul className="ul-informations">
        <li>As quatro paredes devem ser preenchidas</li>
        <li>Ao final do preenchimento de cada parede, aperte o botão de "Inserir dados"</li>
        <li>Tanto a altura quanto a largura da parede não podem ser menores que 1 metro e maiores que 15 metros</li>
        <li>Se os campos para escolher quantidade de portas e/ou janelas não forem preenchidos, a quantidade admitida será de 0(zero)</li>
        <li>Se a quantidade de portas dessa parede for igual ou acima de 1 unidade, a altura da parede deverá ser de no mínimo 2.20 metros</li>
        <li>A área total em m² do somatório de portas e janelas de uma parede não poderá ultrapassar 50% da área total em m² desta mesma parede</li>
        <li>Ao final do preenchimento, serão fornecidos dados referentes a área calculada, a quantidade(em litros) necessária para pintar e opções de latas/litros disponibilizadas</li>
      </ul>
    </div>
  );
}

export default Instructions;
