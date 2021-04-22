function getData(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 1600) reject(time);
      resolve(time);
    }, time);
  });
}

let index = 0;

async function fn() {
  index++;
  console.log(index);
  if (index === 6) {
    return;
  }
  if (true) {
    await getData(2000);
  }
  index--;
  fn();
}

fn();

