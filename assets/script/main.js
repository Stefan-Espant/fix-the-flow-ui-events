let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// skrinking events
const frontend = document.querySelector('a[href="#frontend"]')

frontend.addEventListener('click', shrinkhandler)
frontend.addEventListener('animationend', shrinkhandler)

function shrinkhandler() {
  frontend.classList.toggle('shrink')
}

//hyper event
const design = document.querySelector('a[href="#design"]')

design.addEventListener('dblclick', hyperhandler)
design.addEventListener('animationend', hyperhandler)

function hyperhandler() {
  design.classList.toggle('hyper')
}

// spinning event
const and = document.querySelector('a[href="#and"]')

and.addEventListener('mouseover', spinninghandler)
and.addEventListener('animationend', spinninghandler)

function spinninghandler() {
  and.classList.toggle('spinning')
}

// trigger event
const development = document.querySelector('a[href="#development"]')

development.addEventListener('mouseout', triggerhandler)
development.addEventListener('animationend', triggerhandler)

function triggerhandler() {
  development.classList.toggle('triggered')
}

//disco event
const sprintVijf = document.querySelector('a[href="#sprint-5"]')

sprintVijf.addEventListener('mouseenter', discohandler)

function discohandler() {
  sprintVijf.classList.toggle('disco')
}

//swing event
const fix = document.querySelector('a[href="#fix"]')

fix.addEventListener('drag', swinghandler)

function swinghandler() {
  fix.classList.toggle('swing')
}

//fadeup event
const the = document.querySelector('a[href="#the"]')

the.addEventListener('keydown', fadeUphandler)

function fadeUphandler() {
  the.classList.toggle('fade-up')
}

//slice event
const flow = document.querySelector('a[href="#flow"]')

flow.addEventListener('wheel', claphandler)

function claphandler() {
  flow.classList.toggle('clap')
}

//squeeze event
const user = document.querySelector('a[href="#user"]')

user.addEventListener('mouseup', squeezehandler)

function squeezehandler() {
  user.classList.toggle('squeeze')
}

//flash event
const interface = document.querySelector('a[href="#interface"]')

interface.addEventListener('mousemove', flashhandler)

function flashhandler() {
  interface.classList.toggle('flash')
}