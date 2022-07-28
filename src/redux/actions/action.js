export const increment = (number) => {
 
  return {
    type: "INCREMENT_VALUE",
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: "DECREMENT_VALUE",
    payload:number,
  };
};

export const initial = () => {
  return {
    type: "INITIAL_VALUE",
  };
};