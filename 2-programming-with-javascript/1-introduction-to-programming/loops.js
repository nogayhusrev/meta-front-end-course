let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
console.log("Counting comleted!");

for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Medal");
  } else if (i == 3) {
    console.log("Silver Medal");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver Medal");
      break;
    case 3:
      console.log("Bronze Medal");
      break;

    default:
      console.log(i);
      break;
  }
}
