// Web Audio API tactile feedback generator
// Produces gentle physical clicks (like turning a notebook page or pulling a light cord)

class SoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  // Soft physical door latch & creak sound
  public doorOpen() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Wooden latch click
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.09);
      gain1.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start();
      osc1.stop(this.ctx.currentTime + 0.09);

      // Low resonant door swing
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(140, this.ctx.currentTime + 0.04);
      osc2.frequency.linearRampToValueAtTime(220, this.ctx.currentTime + 0.18);
      gain2.gain.setValueAtTime(0.04, this.ctx.currentTime + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(this.ctx.currentTime + 0.04);
      osc2.stop(this.ctx.currentTime + 0.22);
    } catch {
      // Audio gracefully no-op
    }
  }

  // Soft door shut sound
  public doorClose() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // Audio gracefully no-op
    }
  }

  // Soft page flip sound
  public pageFlip() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // Audio not permitted or not supported; gracefully no-op
    }
  }

  // Realistic mechanical cord pull & spring switch snap
  public cordPull() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // 1. Initial rope tension friction
      const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.04, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.15;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, now);
      noiseFilter.Q.setValueAtTime(3, now);
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      whiteNoise.start(now);

      // 2. Crisp mechanical ratchet switch click (First click)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(1400, now + 0.02);
      osc1.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain1.gain.setValueAtTime(0.12, now + 0.02);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now + 0.02);
      osc1.stop(now + 0.055);

      // 3. Second mechanical settling snap
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(750, now + 0.045);
      osc2.frequency.exponentialRampToValueAtTime(180, now + 0.08);
      gain2.gain.setValueAtTime(0.09, now + 0.045);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.085);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.045);
      osc2.stop(now + 0.085);
    } catch {
      // Audio gracefully no-op
    }
  }
}

export const sound = new SoundFX();

