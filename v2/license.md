# 라이선스

SCE-TTS 프로젝트는 많은 다른 분들이 고생하여 연구하신 내용과 코드를 바탕으로 진행되었습니다.  
사실 제가 직접 작성한 코드는 전체 코드 내용중 극히 일부로, 대부분은 훌륭한 연구자들의 결과물입니다.  

한국어 음성 데이터를 녹음하기 위해 사용한 문장 데이터는 한국정보화진흥원의 [AI Hub](http://www.aihub.or.kr/)에서 제공하는 텍스트 데이터를 이용하여 구성했으며, 약 3시간 정도의 제 음성만으로는 HiFi-GAN을 만족스럽게 학습시킬 수 없었으므로, [VCTK](https://datashare.ed.ac.uk/handle/10283/3443)로 사전 학습된 모델을 사용했습니다.

SCE-TTS 프로젝트에서 제공하는 데이터는 상업적인 목적을 포함한 모든 목적으로 누구나 자유롭게 이용 가능합니다.  
(의무 사항은 아니지만, 데이터의 출처를 남겨주시면 더 좋습니다!)

SCE-TTS 프로젝트에서 공개적으로 제공하는 데이터는 다음과 같습니다.

- [음성 데이터 구축을 위한 한국어 코퍼스](https://github.com/sce-tts/mimic-recording-studio/blob/master/backend/prompts/korean_corpus.csv)
- [SleepingCE Speech Dataset](https://drive.google.com/file/d/1UpoBaZRTJXkTdsoemLBWV48QClm6hpTX/view?usp=sharing)
- [SleepingCE Speech Dataset 사전 학습 모델 (Glow-TTS)](https://drive.google.com/file/d/1DMKLdfZ_gzc_z0qDod6_G8fEXj0zCHvC/view?usp=sharing)
- [SleepingCE Speech Dataset 사전 학습 모델 (HiFi-GAN)](https://drive.google.com/file/d/1vRxp1RH-U7gSzWgyxnKY4h_7pB3tjPmU/view?usp=sharing)

SCE-TTS 프로젝트에서 제공하는 데이터는 다음과 같은 데이터를 활용하여 만들어졌으므로, 다음 데이터들의 라이선스를 확인하고 준수하시기 바랍니다.

- 한국정보화진흥원 AI Hub
  - [한국어 대화 텍스트 데이터](http://www.aihub.or.kr/aidata/85)
  - [한국어-영어 번역(병렬) 말뭉치 텍스트 데이터](http://www.aihub.or.kr/aidata/87)
  - (세부 라이선스는 각 데이터의 다운로드 페이지에서 확인 가능)
- [VCTK](https://datashare.ed.ac.uk/handle/10283/3443)
  - (CC-BY로 배포됨)

이 문서에서 사용한 코드의 원 출처는 다음과 같습니다.

- [g2pK: g2p module for Korean](https://github.com/Kyubyong/g2pK)
- [Mimic Recording Studio](https://github.com/MycroftAI/mimic-recording-studio)
- [TTS](https://github.com/coqui-ai/TTS)

또, 이 문서에서 직접적으로 사용한 모든 코드는 다음 링크에서 확인하실 수 있습니다.

- [SCE-TTS repo](https://github.com/sce-tts)
- [SCE-TTS: Glow-TTS 학습 Colab](https://colab.research.google.com/drive/1L5o8joH8LDV37eupNUpqqWrOcw1sGCit)
- [SCE-TTS: HiFi-GAN 학습 Colab](https://colab.research.google.com/drive/1iwDe-seKo4L-xwb4nttsbu0fEHI__nTo)
- [SCE-TTS: 음성합성 데모 Colab](https://colab.research.google.com/drive/1YkxjzBz3V4eXoAaEgcFNEUg8ZyWV40x9)
