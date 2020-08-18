import React from 'react';

const mainStyle = {
  border: '15px',
  float: 'left',
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  width: '700px',

  marginLeft: '200px',
  // alignItems: 'center',
};

const dummy = {
  count: 1104,
  list: [
    { id: 1, name: '홍길동', money: 10000 },
    { id: 2, name: '작명', money: 10000 },
    { id: 3, name: '힘듦', money: 10000 },
    { id: 4, name: '그만', money: 10000 },
  ],
};

function MainPage4() {
  return (
    <span style={mainStyle}>
      <p style={{ fontSize: '28px' }}>
        프로젝트에 {dummy.count}명의 참여가 이루어졌습니다.
      </p>
      <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
        {dummy.list.map((value, idx) => {
          return (
            <li>
              <strong>{value.name}</strong>님이 <strong>{value.money}</strong>원
              펀딩으로 참여 하셨습니다.
            </li>
          );
        })}
      </ul>
    </span>
  );
}

export default MainPage4;
