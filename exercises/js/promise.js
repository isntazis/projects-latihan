// Promise
// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Di tepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Di ingkari setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai...");
// janji
//   .finally((response) => console.log("selesai menunggu!"))
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("NOT OK : " + response));
// console.log("selesai...");

//Promise.all()
// const anime = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: "One Piece",
//         kreator: "Eichiiro Oda",
//         episode: 1075,
//       },
//     ]);
//   }, 1000);
// });

// const cuaca = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Tangerang",
//         suhu: 33,
//         kondisi: "Panas",
//       },
//     ]);
//   }, 500);
// });

// console.log('mulai...')
// Promise.all([anime, cuaca])
//   .then(response => {
//     const [anime, cuaca] = response
//     console.log(anime)
//     console.log(cuaca)
//   });
// console.log('selesai...')
