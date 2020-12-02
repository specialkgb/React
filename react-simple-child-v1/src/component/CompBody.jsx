import React, { useState } from "react";
import CompCount from "./CompCount";
import CompButton from "./CompButton";

/*
CompBody에는 compcount와 compbutton child 컴포넌트가 import되어있다.
이런 상황에서 compbutton의 button을 클릭했을 때
compcount에 변화된 값을 렌더링하여 보여줘야 한다.
같은 컴포넌트에서는 그냥 state 변수를 선언하고 state 변수를 변화시키는 코드를 작성하면 어렵지 않다. 
(아까 react-simple)

지금은 count와 button이 형제지간.
형제지간 component는 형제지간에 데이터 직접 교환하거나 형제의 변수를 변화시키는 행위를 절대 할 수 없다!!!
count의 변수를 변화시켜 렌더링 수행하려면 벼튼에서 변화시키는 행위를 부모에게 전달하고
부모가 카운트의 변수를 변화시켜 다시 count에게 전달해주는 방식 사용해야 한다. 

3. compCount에서 state변수 받기 : compocount.jsx로 점프

5. compbutton count변수를 변화시킬 때 사용할 setCount함수를 전달. 
6. compButton에서 setCount함수 받기 : compbutton.jsx jump 
*/
const CompBody = (props) => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <CompCount countArg={count} />
      <CompButton setCountFunc={setCount} countArg={count} />
    </div>
  );
};

export default CompBody;
