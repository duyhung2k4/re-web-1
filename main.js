const run = () => {
  const url = "https://halloween-kappa.vercel.app/";
  //similar behavior as an HTTP redirect
  window.location.replace(url);

  //similar behavior as clicking on a link
  window.location.href = url;
}

setTimeout(() => {
  run();
}, 10000);