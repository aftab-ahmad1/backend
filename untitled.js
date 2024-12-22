const promise1 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      return res(new Date());
    }, 1000);
  });
};

const main = async () => {
  const recursive = async () => {
    await promise1().then((resParam) => {
      console.log(resParam);
    });
    await recursive();
  };
  await recursive();
};
main();
