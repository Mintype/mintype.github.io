window.addEventListener('load', () => {
    setTimeout(() => {
      const typewriter = new Typewriter('#typewriter', {
        loop: true,
        delay: 75,
      });

      typewriter
        .typeString('I build fullstack WebApps.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I develop game engines.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I create open-source projects.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I build backend servers.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I design beautiful UIs.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I contribute to open-source.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I learn new languages.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I turn ideas into reality.')
        .pauseFor(1500)
        .start();
    }, 300); // 300 ms delay after page load
  });