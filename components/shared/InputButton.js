import React from 'react';

const InputButton = ({ value , onClickEvent, selected }) => <input type='button' className={selected ? "button_color active":"button_color"} value={value} onClick={onClickEvent}/>

export default React.memo(InputButton);
