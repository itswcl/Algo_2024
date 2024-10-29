/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const [day, month, year] = date.split(" ");

  const formatDay = (day) => {
    // regex to remove th, nd, rd
    // day = day.replace(/\D/g, '');
    let result = "";
    for (let char of day) {
      if (parseInt(char) || char === "0") result += char;
    }
    return result.length === 1 ? "0" + result : result;
  };

  const formatMonth = (month) => {
    return {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    }[month];
  };

  return `${year}-${formatMonth(month)}-${formatDay(day)}`;
};


/**
 * time is O(1) because we do have fixed length for the day
 * space is O(1) because we do have fixed of map and constant result
 */