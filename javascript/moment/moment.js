const a = 123;
const b = 'adfdas';
const c = '2020-df-14';
const d = 'adff-ad-sd';

if (d) {
  const t = d.toString().split('-');
  if (t.length !== 3) console.log('error');

  if (t[0].length !== 4) console.log('error');
  if (!parseInt(t[0])) console.log('error');

  if (t[1].length !== 2) console.log('error');
  if (t[1].length !== 2) console.log('error');
  if (t[2].length !== 2) console.log('error');
  if (t[2].length !== 2) console.log('error');
}
console.log(
  parseInt('123')
)
