let timer = 100
let stopFrameArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   \n',]

stopFrameArray.forEach(frame => {
  setTimeout(() => {
        process.stdout.write(frame);
      }, timer);
      timer += 200;
})