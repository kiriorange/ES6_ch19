var matchObj =
    /^(\d{4})-(\d{2})-(\d{2})$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];
console.log(year);

{
const [, year, month, day] =
    /^(\d{4})-(\d{2})-(\d{2})$/
    .exec('2999-12-31');
console.log(year);
}

