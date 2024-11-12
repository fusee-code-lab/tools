import { css } from '@emotion/css';
import { windowShow } from '@youliso/electronic/render';
import { onMount } from 'solid-js';
import { desktopBackgroundAudio } from '../store/desktop';
import srcImg from '@/assets/images/t1.png';

const style = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--basic-color);
  color: var(--symbol-color);
  > img,
  > video {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > canvas {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const desktopAudio = new desktopBackgroundAudio();

const startDesktopAudio = async () => {
  try {
    await desktopAudio.initialize();
    const canvas = document.getElementById('waveform') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d')!;
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const bufferLength = desktopAudio.analyserFrequencyBinCount;
    const barWidth = (WIDTH / bufferLength) * 1.5;

    let dataArray = new Uint8Array(bufferLength);
    let barHeight;
    const renderFrame = () => {
      requestAnimationFrame(renderFrame);

      desktopAudio.getAudioData(dataArray);

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0, x = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var r = barHeight + 25 * (i / bufferLength);
        var g = 250 * (i / bufferLength);
        var b = 50;

        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 2;
      }
    };
    renderFrame();
  } catch (error) {
    alert(error);
  }
};

export default () => {
  onMount(() => {
    startDesktopAudio();
    windowShow();
  });
  return (
    <div class={style}>
      <img src={srcImg} />
      {/* <video src={src} autoplay muted loop></video> */}
      <canvas id="waveform"></canvas>
    </div>
  );
};
