// import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
  // return <Child color='blue' onClick={ () => console.log('Clicked')}>
  //   asxdda
  // </Child>

  return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
    asdfggh
  </ChildAsFC>
};

export default Parent;