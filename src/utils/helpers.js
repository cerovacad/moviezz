import moment from 'moment'

export const dashToSpace = str => {
  const m = moment(str, 'YYYY-MM-DD').toDate();
  console.log(m)
  // const s =  string.split("").map(l => {
  //   return l === "-" ? " " : l;
  // });
  // return s.join('')
  return(str)
};