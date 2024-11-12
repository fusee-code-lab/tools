import { desktopCapturerSources } from '../common/device';

export class desktopBackgroundAudio {
  private stream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private processor: any | null = null;
  fftSize: number = 512;
  constructor(fftSize?: number) {
    fftSize && (this.fftSize = fftSize);
  }

  destroy() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    if (this.processor) {
      this.processor = null;
    }

    if (this.audioContext) {
      this.audioContext
        .close()
        .then(() => {
          console.log('AudioContext closed');
        })
        .catch((error) => {
          console.error('Error closing AudioContext:', error);
        })
        .finally(() => {
          this.audioContext = null;
        });
    }

    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }

    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
  }

  async initialize() {
    try {
      const sources = await desktopCapturerSources();
      // 请求音频输入设备权限
      let constraints = {
        audio: {
          mandatory: {
            chromeMediaSource: 'desktop'
          }
        },
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sources[0].id,
            minWidth: 1,
            maxWidth: 1,
            minHeight: 1,
            maxHeight: 1,
            minFrameRate: 1
          }
        }
      };
      // @ts-ignore
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      // 创建 AudioContext
      this.audioContext = new AudioContext();
      // 创建 MediaStreamSource 节点
      this.source = this.audioContext.createMediaStreamSource(this.stream);
      // 创建 AnalyserNode
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = this.fftSize;
      // @ts-ignore
      this.processor = new MediaStreamTrackProcessor({ track: this.stream.getTracks()[0] });
      // 连接节点
      this.source.connect(this.analyser);
    } catch (error) {
      console.error('Error initializing desktop audio:', error);
    }
  }

  get analyserFrequencyBinCount() {
    return this.analyser?.frequencyBinCount || 0;
  }

  getAudioData(dataArray: Uint8Array) {
    this.analyser && this.analyser.getByteFrequencyData(dataArray);
  }
}
