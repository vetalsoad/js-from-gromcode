export const createLogger = () => {
  const loggersArray = [];

  function warn(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }
  function error(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }
  function log(text) {
    loggersArray.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }

  // getRecords(typeOfMessage)
  function getRecords(typeOfMessage = "") {
    if (typeOfMessage !== "") {
      return loggersArray
        .filter((el) => {
          if (el.type === typeOfMessage) {
            return el;
          }
        })
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    console.log(loggersArray.sort((a, b) => b.dateTime - a.dateTime));
    return loggersArray.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};
