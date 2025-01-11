import useCountStore from '@/commons/store/useCountStore';

const Example = () => {
  const { count, increment, decrement } = useCountStore();
  return (
    <>
      <h1>예제 페이지입니다</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Example;
