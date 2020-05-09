import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // Utiliza-se o spread operator para dividir os middlewares em parametros da função
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
