import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung service worker');
    return;
  }
  // eslint-disable-next-line no-unused-vars
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registere!');
  } catch (err) {
    console.log('failed to register service worker', err);
  }
};

export default swRegister;
