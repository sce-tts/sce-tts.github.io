# 머신 러닝 수행

!> 이 문서는 이전 버전의 문서입니다.  
최신 버전의 문서를 확인하시려면 우측 상단에서 버전을 변경해주세요.

다음의 내용을 따라할 때, 아래 튜토리얼 유튜브 영상을 참고하시면 더 좋습니다.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e-BmK9VZzRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

일반적으로 TTS는 크게 두 가지 단계로 나뉘어 수행됩니다.

1. 텍스트 문장을 Mel spectrogram으로 변환
2. Mel spectrogram을 오디오 데이터로 변환

[Mel spectrogram](https://medium.com/analytics-vidhya/understanding-the-mel-spectrogram-fca2afa2ce53)이란, 아무튼 대충 오디오의 주파수 데이터를 이쁘게 표현한 무언가? 라고만 생각하시면 될 것 같습니다.  
(우리가 TTS를 만들기 위해 당장 이해할 필요는 없습니다!)

어쨌든, 앞으로 우리는 머신 러닝을 통해 위 두가지 과정을 수행하도록 학습을 진행할 것입니다.  
1번 과정은 Glow-TTS로, 2번 과정은 Multi-band MelGAN으로 진행할 것입니다.

실제 진행 순서도 위와 동일하게 Glow-TTS의 학습을 먼저 진행하고, 그 다음 Multi-band MelGAN 학습을 진행합니다.  
이러한 순서로 진행을 하는 이유는, Multi-band MelGAN의 경우 제 목소리로 미리 학습해 둔 결과물을 바로 사용해도 어느 정도는 다른 사람의 목소리에도 적용이 가능하기 때문입니다.  
따라서, Glow-TTS만 먼저 학습을 진행해도, 제 목소리로 학습된 Multi-band MelGAN을 통하여 테스트를 수행할 수 있습니다.

그리고 Glow-TTS의 학습을 어느 정도 만족스러울 때까지 진행한 이후에 Multi-band MelGAN 학습으로 넘어가면, 더 완벽한 TTS 결과물을 얻으실 수 있을 겁니다.

## Glow-TTS 학습

Glow-TTS 학습과 관련된 내용은 아래 링크의 내용을 참조하세요.

- [SCE-TTS: Glow-TTS 학습 Colab](https://colab.research.google.com/drive/1IlZt42ETvNHthRFXfwNSSH-ftWthxzqr?usp=sharing)

## Multi-band MelGAN 학습

Multi-band MelGAN 학습과 관련된 내용은 아래 링크의 내용을 참조하세요.

- [SCE-TTS: Multi-band MelGAN 학습 Colab](https://colab.research.google.com/drive/1UinTd1Kp1ytwPQ4QWA610ZKOVfmPDdn5?usp=sharing)