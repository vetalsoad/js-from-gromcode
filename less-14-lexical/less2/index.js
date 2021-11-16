let remember = 0;

export const add = (numb) => (remember = numb + remember);


export const decrease = (numb) => (remember = remember - numb);

export const reset = () => (remember = 0);


export const getMemo = () => remember;
  


