const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const d = new Date();
const currectMonth=monthNames[d.getMonth()]
console.log(`The current month is  ${currectMonth} and ${monthNames.indexOf(currectMonth)+1}` );
console.log(`${d.getDate()}.${monthNames.indexOf(currectMonth)+1}.${d.getFullYear()}`)