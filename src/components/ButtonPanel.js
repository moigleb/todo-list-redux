import React from 'react';
import Button from '../components/Button';
import { filterType, textTypeButton } from '../containers/redux/constants/index';

const ButtonPanel = () => {
  const types = Object.keys(filterType)
  const renderButtons = types.map( (buttonType, key) => {
    return <Button
      key={key}
      filter={filterType[buttonType]}>
      {textTypeButton[buttonType]}
      </Button>
  } );
  return <div className="button-panel-wrap">
    { renderButtons }
  </div>
};


export default ButtonPanel;
