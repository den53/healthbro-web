import React from 'react';

export default (props) => {
  let imgUrl = props.img;
  let divStyle = {
    paddingTop: '3%',
  };
  if(typeof imgUrl != 'undefined'){
    divStyle = {
      background: `url(${imgUrl})`,
        backgroundSize: 'cover',
        paddingTop: '69%',
      }
    };

  return (
    <div className={props.columns}>
      <h2>{props.heading}</h2>
      <div style={divStyle}>
        <p>{props.text}</p>
      </div>
    <p><a className="btn btn-default" href="#" role="button">{props.buttonText}</a></p>
    </div>
  );
}
