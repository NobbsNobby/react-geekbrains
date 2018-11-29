const loop = (times = 0, callback = null) => {
  if (typeof callback === "function") {
    for (let i = 1; i <= times; i++) {
      callback();
    }
  }
};

loop(2, function() {
  console.log("hi");
});
