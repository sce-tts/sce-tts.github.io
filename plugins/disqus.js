/* eslint-disable no-unused-vars */

/*
See https://raw.githubusercontent.com/docsifyjs/docsify/v4.12.1/src/plugins/disqus.js
*/

const fixedPath = location.href.replace('/-/', '/#/');
if (fixedPath !== location.href) {
  location.href = fixedPath;
}

function disqus_identifier(path) {
  if (path == '/v1/test') {
    return '/test';
  } else if (path == '/v1/train') {
    return '/train';
  } else if (path == '/v1/recording') {
    return '/recording';
  }
  return path;
}

function install(hook, vm) {
  const dom = Docsify.dom;
  const disqus = vm.config.disqus;
  if (!disqus) {
    throw Error('$docsify.disqus is required');
  }

  hook.init(_ => {
    const script = dom.create('script');

    script.async = true;
    script.src = `https://${disqus}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', Number(new Date()));
    dom.appendTo(dom.body, script);
    dom.style('#disqus_thread.hide { display: none; }');
  });

  hook.mounted(_ => {
    const div = dom.create('div');
    div.id = 'disqus_thread';
    const main = dom.getNode('#main');
    div.style = `width: ${main.clientWidth}px; margin: 0 auto 20px;`;
    dom.appendTo(dom.find('.content'), div);

    if (vm.route.path !== '/' && dom.find('.content #_404-not-found') === null) {
      div.classList.remove('hide');
      // eslint-disable-next-line
      window.disqus_config = function() {
        this.page.url = 'https://sce-tts.github.io/-' + vm.route.path;
        this.page.identifier = disqus_identifier(vm.route.path);
        this.page.title = document.title;
      };
    } else {
      div.classList.add('hide');
    }
  });

  hook.doneEach(_ => {
    const div = dom.getNode('#disqus_thread');
    if (vm.route.path !== '/' && dom.find('.content #_404-not-found') === null) {
      div.classList.remove('hide');
      if (typeof window.DISQUS !== 'undefined') {
        window.DISQUS.reset({
          reload: true,
          config: function() {
            this.page.url = 'https://sce-tts.github.io/-' + vm.route.path;
            this.page.identifier = disqus_identifier(vm.route.path);
            this.page.title = document.title;
          },
        });
      }
    } else {
      div.classList.add('hide');
    }
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins);