# 라이선스

SCE-TTS 프로젝트는 많은 다른 분들이 고생하여 연구하신 내용과 코드를 바탕으로
진행되었습니다.  
제가 직접 작성한 코드는 전체 코드 내용중 극히 일부로, 대부분은 훌륭한
연구자들과 프로그래머들의 성과입니다.

SCE-TTS 프로젝트에서 제공하는 주요 코드 및 데이터는 다음과 같습니다.

- [SCE-TTS GitBub Repo](https://github.com/sce-tts)
  - [sce-tts.github.io](https://github.com/sce-tts/sce-tts.github.io)
    - MIT License
  - [tts-server](https://github.com/sce-tts/tts-server/tree/coqui-ai-tts)
    - MIT License
  - [g2pK](https://github.com/sce-tts/g2pK)
    - 원본 코드 저장소: https://github.com/Kyubyong/g2pK
    - Apache License 2.0
  - [mimic-recording-studio](https://github.com/sce-tts/mimic-recording-studio)
    - 원본 코드 저장소: https://github.com/MycroftAI/mimic-recording-studio
    - Apache License 2.0
  - [TTS](https://github.com/sce-tts/TTS)
    - 원본 코드 저장소: https://github.com/coqui-ai/TTS
    - Mozilla Public License 2.0

이하의 데이터는 [CC-BY 2.0](https://creativecommons.org/licenses/by/2.0/) 라이선스로 배포하며, 텍스트 데이터의 원문은 한국정보화진흥원 [AI Hub](https://www.aihub.or.kr/)에서 제공하는 [한국어 대화 텍스트 데이터](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=116)와 [한국어-영어 번역(병렬) 말뭉치 텍스트 데이터](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=126)입니다.

- [음성 데이터 녹음을 위한 한국어 코퍼스](https://github.com/sce-tts/mimic-recording-studio/blob/master/backend/prompts/korean_corpus.csv)
- [SleepingCE Speech Dataset](https://drive.google.com/file/d/1UpoBaZRTJXkTdsoemLBWV48QClm6hpTX/view?usp=sharing)
- [SleepingCE Speech Dataset 사전 학습 모델 (Glow-TTS)](https://drive.google.com/file/d/1DMKLdfZ_gzc_z0qDod6_G8fEXj0zCHvC/view?usp=sharing)
- [SleepingCE Speech Dataset 사전 학습 모델 (HiFi-GAN)](https://drive.google.com/file/d/1vRxp1RH-U7gSzWgyxnKY4h_7pB3tjPmU/view?usp=sharing)
  - 이 모델은 [coqui-ai/TTS](https://github.com/coqui-ai/TTS)에서 제공하는 [VCTK](https://datashare.ed.ac.uk/handle/10283/3443)로 학습된 [모델](https://github.com/coqui-ai/TTS/releases/download/v0.0.12/vocoder_model--en--vctk--hifigan_v2.zip)에서 전이학습하여 만들어졌습니다.