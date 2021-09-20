const getPeople = (obj) => {

  const rooms = Object.values(obj).flat(1);
 

  return rooms.map(el => el.name);
};

const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Andrey" },
    { name: "Ann" },
    { name: "Vasyl" },
  ],
  room2: [
    {name: 'Dan'},
  ],
};
/* console.log(rooms); */
console.log(getPeople(rooms));