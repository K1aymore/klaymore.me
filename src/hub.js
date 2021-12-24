
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

let art = document.getElementById('hubVideos');
let time = 250;

async function video() {
  art.textContent = String.raw`
  _________________________________
  |        _     _                 |
  |  __ __(_) __| | ___  ___  ___  |
  |  \ V /| |/ _' |/ -_)/ _ \(_-/  |
  |   \_/ |_|\__/_|\___|\___//__/  |
  |                                |
  |________________________________|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |        _     _                 |
  |       (_) __| | ___  ___  ___  |
  |  __ __| |/ _' |/ -_)/ _ \(_-/  |
  |  \ v /|_|\__/_|\___|\___//__/  |
  |   \_/                          |
  |________________________________|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |              _                 |
  |        _  __| | ___  ___  ___  |
  |       (_)/ _' |/ -_)/ _ \(_-/  |
  |  __ __| |\__/_|\___|\___//__/  |
  |  \ V /|_|                      |
  |___\_/__________________________|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |                                |
  |              _  ___  ___  ___  |
  |  __ __ _  __| |/ -_)/ _ \(_-/  |
  |  \ V /(_)/ _' |\___|\___//__/  |
  |   \_/ | |\__/_|                |
  |_______|_|______________________|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |                                |
  |  __ __ _             ___  ___  |
  |  \ V /(_)    _  ___ / _ \(_-/  |
  |   \_/ | | __| |/ -_)\___//__/  |
  |       |_|/ _' |\___|           |
  |__________\__/_|________________|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |  __ __ _                       |
  |  \ V /(_)    _            ___  |
  |   \_/ | | __| |      ___ (_-/  |
  |       |_|/ _' | ___ / _ \/__/  |
  |          \__/_|/ -_)\___/      |
  |________________\___|___________|`;
  await delay(time);

  // while(true) {
  art.textContent = String.raw`
  _________________________________
  |       (_)    _                 |
  |  __ __| | __| |                |
  |  \ V /|_|/ _' | ___       ___  |
  |   \_/    \__/_|/ -_) ___ (_-/  |
  |                \___|/ _ \/__/  |
  |_____________________\___/______|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |        _  __| |                |
  |       (_)/ _' | ___            |
  |  __ __| |\__/_|/ -_) ___       |
  |  \ V /|_|      \___|/ _ \ ___  |
  |   \_/               \___/(_-/  |
  |__________________________/__/__|`;
  await delay(time);
  art.textContent = String.raw`
  _________________________________
  |        _     _                 |
  |  __ __(_) __| | ___  ___  ___  |
  |  \ V /| |/ _' |/ -_)/ _ \(_-/  |
  |   \_/ |_|\__/_|\___|\___//__/  |
  |                                |
  |________________________________|`;
  await delay(time);
  // }
}

video();
