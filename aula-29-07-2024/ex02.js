const celsius = [0, 20, 30, 40];

const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);

console.log(`Temperaturas em celsius: ${celsius}`);
console.log(`Temperatura em fahrenheit: ${fahrenheit}`);
