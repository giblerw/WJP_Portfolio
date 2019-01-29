import React from 'react';

export default class Home extends React.Component {
  render(){
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <div>
        <div style={style}>
          <div className={'container'}>
            <h2 className={'teal-text'}>William Jameson Patterson</h2>
            <p>
            Bacon ipsum dolor amet capicola burgdoggen bresaola rump alcatra biltong sausage kevin swine meatball tail venison fatback. Meatball chuck porchetta ground round leberkas picanha tenderloin pastrami. Ground round beef cupim t-bone, turducken tail ham corned beef ball tip pork pancetta meatloaf. Cupim biltong porchetta, ground round ham ball tip tail brisket shankle andouille kevin flank short loin. Tail brisket drumstick ham kevin pancetta.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
