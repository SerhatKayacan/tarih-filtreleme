const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

const getYesterday = () => {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let dd = String(yesterday.getDate()).padStart(2, "0");
  let mm = String(yesterday.getMonth() + 1).padStart(2, "0");
  let yyyy = yesterday.getFullYear();
  yesterday = yyyy + "-" + mm + "-" + dd;
  return yesterday;
};

const getCurrentMonth = () => {
  let today = new Date();
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let thisMonth = yyyy + "-" + mm;
  return thisMonth;
};

export const findBetween = (dates, start, end, filterProperty) => {
  let startDate = new Date(start);
  let endDate = new Date(end);
  let datesFiltered = [];
  let getDateArray = function(start, end) {
    let arr = new Array();
    let dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };
  let dateArr = getDateArray(startDate, endDate);
  let dateArrFormatted = dateArr.map(today => {
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  });
  dates.map(dateObject => {
    let i;
    for (i = 0; i < dateArrFormatted.length; i++) {
      if (dateObject[filterProperty].includes(dateArrFormatted[i])) {
        datesFiltered.push(dateObject);
        break;
      }
    }
  });
  return datesFiltered;
};

export const filterDates = (dates, chosen, filterProperty) => {
  let today = getCurrentDate();
  let yesterday = getYesterday();
  let thisMonth = getCurrentMonth();
  switch (chosen) {
    case "today":
      return dates.filter(dateObject => {
        return dateObject[filterProperty].includes(today);
      });
    case "yesterday":
      return dates.filter(dateObject => {
        return dateObject[filterProperty].includes(yesterday);
      });
    case "thismonth":
      return dates.filter(dateObject => {
        return dateObject[filterProperty].includes(thisMonth);
      });
  }
};
