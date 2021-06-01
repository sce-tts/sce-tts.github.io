# 변경사항

SCE-TTS v2에서 변경된 사항들은 다음과 같습니다.

- v1에서는 두개의 프로젝트([jaywalnut310/glow-tts](https://github.com/jaywalnut310/glow-tts), [TensorSpeech/TensorflowTTS](https://github.com/TensorSpeech/TensorflowTTS))를 사용하여 모델을 학습시켰지만, v2에서는 하나의 프로젝트([coqui-ai/TTS](https://github.com/coqui-ai/TTS))를 사용하여 두 모델간의 연동을 더욱 간단하게 할 수 있습니다.
- v1은 보코더로 Multi-band MelGAN을 사용했지만, v2는 보코더로 HiFi-GAN을 사용합니다.
- v2에서는 HiFi-GAN을 ONNX로 변환하여 사용할 수 있도록 하여 추론 성능을 향상했습니다.