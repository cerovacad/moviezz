import moment from "moment";

export const dashToSpace = str => {
  return moment(moment(str, "YYYY-MM-DD").toDate()).format("MMM Do YYYY");
};

export const findById = (arr, id) => {
  let myItem = false;
  arr.map(item => {
    if (item.id === parseInt(id, 10)) {
      myItem = item;
      return item;
    }
    return item;
  });
  return myItem;
};
