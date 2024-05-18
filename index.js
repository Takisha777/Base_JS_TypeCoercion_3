console.log(String(console.log),Number(console.log),Boolean(console.log));
console.log(String({ name: 'Maxim' }),Number({ name: 'Maxim' }),Boolean({ name: 'Maxim' }));
//console.log(String(Symbol('key')),Number(Symbol('key')),Boolean(Symbol('key')));      error
console.log(String(Symbol),Number(Symbol),Boolean(Symbol));
console.log(String(Number),Number(Number),Boolean(Number));
console.log(String(''),Number(''),Boolean(''));
console.log(String(0),Number(0),Boolean(0));
console.log(String('-105'),Number('-105'),Boolean('-105'));