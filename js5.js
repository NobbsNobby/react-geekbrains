let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(
    //fetch возвращает Promise в массив, но это то чего вы хотели в дз видимо
    fetch(`https://jsonplaceholder.typicode.com/users/${i + 1}`).then(data =>
      data.json()
    )
  );
}

Promise.all(arr).then(arrayOfResults => {
  console.log(arrayOfResults);
});
