# TTS 모델 학습

다음의 내용을 따라할 때, 아래 튜토리얼 유튜브 영상을 참고하시면 더 좋습니다.

!> 아래 영상은 최신 버전의 내용이 아닌 이전 버전의 내용을 바탕으로 설명합니다.  
내용을 참고하실 때 유의하시기 바랍니다.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e-BmK9VZzRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

TTS 모델 학습은 아래의 두 가지 단계로 나뉘어 수행됩니다.

1. 텍스트 문장을 Mel spectrogram으로 변환
1. Mel spectrogram을 오디오 데이터로 변환 

앞으로 우리는 [Glow-TTS](https://arxiv.org/abs/2005.11129)와 [HiFi-GAN](https://arxiv.org/abs/2010.05646)을 사용하여 위의 두 가지 단계를 수행할 것입니다.

?> :memo: [Mel spectrogram](https://medium.com/analytics-vidhya/understanding-the-mel-spectrogram-fca2afa2ce53)은
음성 데이터의 주파수를 잘 표현한 데이터 형식 정도로만 이해하시면 될 것 같습니다.  
(우리가 TTS를 만들기 위해 완전히 이해할 필요는 없습니다)

두 모델 모두 SCE-TTS에서 제공하는 사전 학습 모델을 사용하여 학습을 진행하게
됩니다. 따라서, 적은 시간으로도 빠르게 학습을 진행할 수 있으며 둘 중 하나의
모델만을 학습시켜도 음성 합성 결과를 테스트할 수 있습니다.

정확한 설명은 아니지만, Glow-TTS는 생성하는 음성의 말투와 음색을 결정하게 되고,
HiFi-GAN은 Glow-TTS로 생성한 음성을 실제 화자의 음색과 더 비슷하게 만들어준다고
볼 수 있습니다. 만약 **합성된 음성의 말투가 이상하다면 Glow-TTS 모델을 더**
**학습**시키고, **합성된 음성에 이상한 노이즈가 있거나 음색이 다르다면**
**HiFi-GAN 모델을 더 학습**시켜 문제를 개선할 수 있습니다.

?> :memo: 두 모델의 학습은 완전히 독립적으로 수행되므로, 두 모델의 학습 순서는 최종 결과물에 영향을 주지 않습니다.

## Glow-TTS 학습

Glow-TTS 학습과 관련된 내용은 아래 링크의 내용을 참조하세요.

- [SCE-TTS: Glow-TTS 학습 Colab](https://colab.research.google.com/drive/1L5o8joH8LDV37eupNUpqqWrOcw1sGCit)

## HiFi-GAN 학습

HiFi-GAN 학습과 관련된 내용은 아래 링크의 내용을 참조하세요.

- [SCE-TTS: HiFi-GAN 학습 Colab](https://colab.research.google.com/drive/1iwDe-seKo4L-xwb4nttsbu0fEHI__nTo)