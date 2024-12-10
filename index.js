const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
    preloaderWrapper.classList.add('fade-out-animation');
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
    preloaderWrapper.classList.add('fade-out-animation');
});