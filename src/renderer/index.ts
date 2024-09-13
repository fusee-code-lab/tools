import { windowLoad, windowShow, windowSingleInstanceOn } from '@youliso/electronic/ipc';

windowLoad(() => {
  console.log('customize', window.customize);
  windowSingleInstanceOn((argv) => {
    console.log(argv);
  });
  const rootDom = document.getElementById('root');
  const customizeDom = document.createElement('div');
  customizeDom.style.wordBreak = 'break-word';
  customizeDom.innerText = JSON.stringify(window.customize);
  rootDom?.appendChild(document.createTextNode('customize'));
  rootDom?.appendChild(customizeDom);
  rootDom?.appendChild(document.createTextNode('hello word'));
  windowShow();
});
