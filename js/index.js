/* Guarda en memoria el contenido de cada uno de los elementos en el dom */
/* Esas líneas de código seleccionan elementos específicos del DOM usando sus ID y los almacenan en
variables para facilitar el acceso y la manipulación en el código JavaScript. Esto es lo que hace
cada línea: */
  const $video = document.querySelector('#video')
  const $play = document.querySelector('#play')
  const $pause = document.querySelector('#pause')
  const $backward = document.querySelector('#backward')
  const $forward = document.querySelector('#forward')
  
/* Accdemos al metodo de escucha para poder realizar la accion del click */

/* El código `.addEventListener('click', handlePlay)` agrega un detector de eventos al elemento
``. Este detector de eventos escucha un evento 'clic' en el elemento `` y, cuando se hace
clic en el elemento, ejecutará la función `handlePlay`. En este caso, cuando se hace clic en el
botón de reproducción, la función `handlePlay` reproducirá el video, ocultará el botón de
reproducción, mostrará el botón de pausa y registrará un mensaje en la consola. */
  $play.addEventListener('click', handlePlay)

/**
 * La función `handlePlay` reproduce un video, oculta el botón de reproducción, muestra el botón de
 * pausa y registra un mensaje en la consola cuando se hace clic en el botón de reproducción.
 */
  function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le di click al boton de play');
  }

  $pause.addEventListener('click', handlePause)

/**
 * La función `handlePause` pausa un video, oculta el botón de reproducción, muestra el botón de pausa
 * y registra un mensaje en la consola cuando se hace clic en el botón de pausa.
 */

  function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Le di click al boton de pausa');
  }

  $backward.addEventListener('click', handleBackward)

/**
 * La función `handleBackward` disminuye el tiempo actual de un elemento de video en 10 segundos y
 * registra el tiempo actualizado en la consola.
 */
  function handleBackward () {
    $video.currentTime -= 10
    console.log('Atrase 10 segundos', $video.currentTime);
  }

  $forward.addEventListener('click', handleForward)

/**
 * La función `handleForward` aumenta el tiempo actual de un video en 10 segundos y registra un mensaje
 * en la consola.
 */
  function handleForward () {
    $video.currentTime += 10
    console.log('Adelante 10 segundos', $video.currentTime);
  }
  
  const $progress = document.querySelector('#progress')
  $video.addEventListener('loadedmetadata', handleLoaded)
  $video.addEventListener('timeupdate', handleTimeUpdate)
  
/**
 * La función `handleLoaded` establece el valor máximo de una barra de progreso según la duración de un
 * video y registra un mensaje cuando se carga el video.
 */
  function handleLoaded() {
    $progress.max = $video.duration
    $video.duration
    console.log('a cargado mi video');    
  }

/**
 * La función `handleTimeUpdate` actualiza el valor de progreso y registra el tiempo actual de un
 * elemento de video.
 */
  function handleTimeUpdate () {
    $progress.value = $video.currentTime
    console.log('Tiempo actual', $video.currentTime);
  }

  $progress.addEventListener('input', handleInput)

 /**
  * La función `handleInput` registra el valor de `` y establece el tiempo actual del elemento
  * de video `` en el valor de ``.
  */
  function handleInput () {
    console.log($progress.value);
    $video.currentTime = $progress.value
  }