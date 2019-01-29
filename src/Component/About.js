import React from 'react';

export default class About extends React.Component{
  render(){
    const style = {
      height: 300,
      display: 'flex',
      alignItems: 'center',
    }

    return(
      <div className={'container'}>
        <h4 className={'teal-text'}>About Us</h4>
        <div className={'card-panel z-depth-5 teal'}>
          <div className={'container white-text'} style={style}>
            <p>
              Kevin prosciutto biltong brisket cupim sausage. Strip steak turducken meatloaf tenderloin burgdoggen. Pastrami fatback landjaeger cupim kevin meatball alcatra ham buffalo filet mignon. Shankle biltong rump pork loin turducken filet mignon strip steak swine pastrami jowl cupim ground round alcatra. Tail bacon short loin, pig tri-tip capicola kielbasa chicken corned beef picanha ball tip frankfurter jerky rump.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
