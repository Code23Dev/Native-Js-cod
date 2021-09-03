const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const d = new Date();
const correctMonth=monthNames[d.getMonth()]
console.log(`The correct month is  ${correctMonth} and ${monthNames.indexOf(correctMonth)+1}` );
console.log(`${d.getDate()}.${monthNames.indexOf(correctMonth)+1}.${d.getFullYear()}`)