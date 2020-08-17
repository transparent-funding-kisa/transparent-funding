import React from 'react';

const imgStyle = {
  filter: 'blur(5px)',
  backgroundImage: 'url(../components/images/shoes.jpg)',
  height: '247px',
  width: '100%',
  alt: 'Not Found',
};

const dummy = {
  tag: '패션 잡화',
  name: '[앵콜] 나X키, 아디X스 코르크 깔창 쓰는데는 다 이유가 있습니다.',
};

function Banner() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          style={imgStyle}
          src={require('../components/images/shoes.jpg')}
        ></img>
        <div
          style={{
            left: '40%',
            width: '450px',
            bottom: '40%',
            fontWeight: 'bold',
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div style={{ color: '#5cdede' }}>{dummy.tag}</div>
          {dummy.name}
        </div>
      </div>
    </>
  );
}

export default Banner;
