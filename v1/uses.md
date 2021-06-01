# TTS 활용하기

!> 이 문서는 이전 버전의 문서입니다.  
최신 버전의 문서를 확인하시려면 우측 상단에서 버전을 변경해주세요.

다음의 내용을 따라할 때, 아래 튜토리얼 유튜브 영상을 참고하시면 더 좋습니다.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Tr5sjaeDKbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

성공적으로 학습이 완료됬다면, 이제 만들어진 TTS를 사용할 시간입니다!

SCE-TTS에서는 아래의 두가지 기능을 제공하는 TTS 서버를 제공합니다.

- 텍스트를 입력하면 내 목소리로 읽어주는 웹 페이지
- Twip 도네이션 메시지 기본 TTS를 내 목소리로 바꾸기

## TTS 서버 설치 및 설정

SCE-TTS에서 제공하는 TTS 서버를 사용하기 위해서는 도커가 필요합니다.  
(만약 설치가 되어있지 않다면 [도커 설치](/v1/recoding.md#도커-설치)를 참고하여 설치해주세요.)

TTS 서버는 아래 주소에서 내려받으실 수 있습니다.

[https://github.com/sce-tts/tts-server/archive/master.zip](https://github.com/sce-tts/tts-server/archive/master.zip)

내려받은 파일을 압축을 해제하시고 `update-server.bat` 파일을 실행하면 명령 프롬프트가 실행되고, 서버를 실행하기 위한 파일들을 자동으로 설치합니다.

설치가 완료되면, 학습한 모델을 복사하여 다운받은 서버 폴더 내부의 `data\models` 폴더에 적절하게 배치합니다.

배치한 모델의 구조는 다음과 같아야합니다.

- tts-server/
  - data/
    - models/
      - glow-tts/
        - **config.json**
        - **G_3511.pth**
      - mb-melgan/
        - checkpoints/
          - **generator-667775.h5**
        - **config.yml**
        - **stats.npy**
  - docker-compose.yml
  - Dockerfile
  - ...

(위 파일명의 숫자는 예시이므로, 자신이 학습한 체크포인트 번호를 그대로 쓰시면 됩니다.)

모델 파일 복사를 완료한 후, 메모장으로 `docker-compose.yml` 파일을 열고 `TTS_GLOW_TTS`와 `TTS_MULTIBAND_MELGAN` 부분의 숫자를 복사한 파일명의 숫자로 적절히 바꿔줍니다.

예를 들어, glow-tts의 `G_6234.pth` 파일과 mb-melgan의 `generator-800000.h5` 파일을 사용하시려면 다음과 같이 수정하신 후 저장해주세요.

``` yml
- "TTS_GLOW_TTS=6234"
# - "TTS_FASTSPEECH2=600000"
- "TTS_MULTIBAND_MELGAN=800000"
```

## TTS 서버 실행

다운받은 서버 폴더에서 `start-server.bat` 파일을 실행하면 명령 프롬프트를 통해 TTS 서버를 실행합니다.

명령 프롬프트에 `INFO:werkzeug: * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)`라는 메시지가 출력되면, TTS 서버를 통해 음성 합성 기능을 사용할 수 있습니다.

만약 서버를 종료하시려면 실행된 명령 프롬프트에서 `Ctrl+C` 키를 눌러 종료할 수 있습니다.

정상적인 방법으로 서버가 종료되지 않을 때에는 `kill-server.bat` 파일을 실행하여 강제로 서버를 종료할 수 있습니다.

## 입력한 텍스트를 음성으로 듣기

TTS 서버가 실행된 컴퓨터에서 웹 브라우저로 `http://localhost:5000/`에 접속하면 입력한 텍스트를 음성으로 들을 수 있는 페이지가 표시됩니다.

페이지 상단 입력 칸에 음성으로 듣고자 하는 내용을 입력하고, "Infernce" 버튼을 클릭하면 음성이 재생됩니다.  
(컴퓨터 성능에 따라 첫 음성 재생까지 2~5초 정도 걸립니다.)

이 페이지에서 제공하는 기능은 다음과 같습니다.

- 여러 줄의 문장을 입력하면 자동으로 이어서 합성하여 재생
- 음성 재생을 중단하려면 "Stop" 버튼을 클릭
- infer on Enter 항목을 ON으로 조정하면, 입력 창에서 엔터 키를 누르면 즉시 음성 재생후 텍스트 삭제(채팅하듯이 음성 합성 가능)
- infer on Enter 항목 우측 숫자를 키워 볼륨 배율 조절 가능(2 일 경우 2배 크기로 재생)

## Twip 도네이션 메시지 TTS 대체

[Twip](http://twip.kr/)은 [트위치](https://www.twitch.tv/) 스트리머를 위한 오버레이 도구로, 주로 방송 후원 등의 기능을 위해 주로 사용되며, 특히 방송 후원 메시지를 TTS로 읽어주는 기능이 매우 인상적입니다.

이러한 Twip의 TTS 기능은 여러 목소리로 사용할 수 있지만, 기본적으로는 구글의 Speech API를 사용하고 있습니다.

SCE-TTS의 TTS 서버는 Twip에서 사용하는 구글 Speech API 음성을 내 목소리로 변경해주는 기능을 제공합니다.

이 기능을 사용하시려면, 방송 송출용 프로그램(OBS, Xsplit 등)을 실행하는 컴퓨터에서 TTS 서버를 실행하고, Twip의 Alert Box URL을 다음 예시와 같이 바꿔서 사용해주시면 됩니다.

```
Original - https://twip.kr/widgets/alertbox/53cr37c0d3
           ^^^^^^^^^^^^^^^
Changed  - http://localhost:5000/widgets/alertbox/53cr37c0d3
           ^^^^^^^^^^^^^^^^^^^^^
```

(`https`를 `http`로 바꾸는 것을 잊지 마세요!)

변경된 주소가 정상적으로 동작하는지 확인하시려면, [Twip 대시보드](http://twip.kr/dashboard/alertbox)의 알람 테스트 기능을 사용하실 수 있습니다.

**해당 주소를 변경하여 사용하시면, TTS 서버가 실행중이지 않을 때에는 Twip 알람이 표시되지 않을 수 있으니 주의해주세요.**  
기존 주소 역시 그대로 사용하실 수 있으니, TTS 서버를 사용하지 않으실 때에는 기존 주소를 사용해주시면 됩니다.