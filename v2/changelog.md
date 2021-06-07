# 변경사항

SCE-TTS v2에서 변경된 사항들은 다음과 같습니다.

- v1에서는 두개의 프로젝트([jaywalnut310/glow-tts](https://github.com/jaywalnut310/glow-tts), [TensorSpeech/TensorflowTTS](https://github.com/TensorSpeech/TensorflowTTS))를 사용하여 모델을 학습시켰지만, v2에서는 하나의 프로젝트([coqui-ai/TTS](https://github.com/coqui-ai/TTS))를 사용하여 두 모델간의 연동을 더욱 간단하게 할 수 있습니다.
- v1은 보코더로 Multi-band MelGAN을 사용했지만, v2는 보코더로 HiFi-GAN을 사용합니다.
- v2에서는 HiFi-GAN을 ONNX로 변환하여 사용할 수 있도록 하여 추론 성능을 향상했습니다.
- [음성 데이터 구축을 위한 한국어 코퍼스](https://github.com/sce-tts/mimic-recording-studio/blob/master/backend/prompts/korean_corpus.csv)의 문장을 음소 빈도순으로 정렬하여 일부만 사용하도록 변경했습니다.
- v1은 Mimic Recording Studio와 TTS 서버를 사용하기 위해 도커를 사용했지만, v2는 64비트 Windows 10용 exe 파일로 배포하여 도커 없이 사용할 수 있습니다.
- 라이선스를 좀 더 명확하게 수정했습니다.