const convertData = (data, type) => {
  const convertedData = data[type]?.map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

const shortenText = (text) => {
  return text?.slice(0, 189);
};

export { convertData, shortenText };
