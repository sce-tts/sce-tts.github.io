# 음성 녹음

다음의 내용을 따라할 때, 아래 튜토리얼 유튜브 영상을 참고하시면 더 좋습니다.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3iZMIprnZOo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

자신의 목소리로 TTS를 만들기 위해서는 먼저 자신의 목소리를 잘 녹음해야 합니다.  
특히 이 가이드에서는 머신 러닝에 바로 사용할 수 있는 데이터로 바로 녹음할 수 있도록, Mimic Recording Studio라는 프로그램을 사용하여 녹음을 진행합니다.

그러나 [Mimic Recording Studio의 원본 프로젝트](https://github.com/MycroftAI/mimic-recording-studio)는 한국어를 위해 개발되어 있지 않으므로, 바로 녹음을 진행할 수 있도록 수정한 버전을 사용할 것입니다.

또, Mimic Recording Studio는 일반적인 프로그램과 같이 exe 파일로 배포되지 않으므로, 실행 및 설치가 바로 되지 않고 '도커'라는 다른 프로그램이 필요합니다.


## 도커 설치

도커는 [도커 데스크탑 다운로드 페이지](https://www.docker.com/products/docker-desktop)에서 다운로드 받으실 수 있습니다.  
`Windows (stable)`을 받아서 기본 설정대로 설치를 진행하시면 됩니다.

만약 사용하고 계신 운영체제가 Windows 10 Home일 경우, 설치 과정에서 WSL2 관련 경고나 오류가 나올 수 있는데, 오류 설명을 잘 읽어보시고 설명 그대로 진행하시면 큰 문제 없이 설치하실 수 있을 겁니다.  
(잘 모르겠으면 위 동영상을 참고해주세요.)

만약 사용하고 계신 운영체제가 Windows 10 Pro, Enterprise, Education일 경우, 윈도우의 가상화 기능과 Hyper-V 기능이 활성화되어 있어야 합니다.  
이 경우 [Windows에서 Docker 사용하기](https://blog.dalso.org/it/docker/12878)의 설명을 참고해주세요.

도커의 처음 설치 및 실행 과정은 약 10분 정도 소요됩니다.


## Mimic Recording Studio 설치 및 실행

앞으로 진행할 내용에 맞게 수정된 Mimic Recording Studio는 아래 링크에서 내려받으실 수 있습니다.

[https://github.com/sce-tts/mimic-recording-studio/archive/master.zip](https://github.com/sce-tts/mimic-recording-studio/archive/master.zip)

내려받은 파일을 압축을 해제한 상태에서 `start-windows.bat` 파일을 실행하면 명령 프롬프트가 실행되고, Mimic Recording Studio을 자동으로 설치하고 실행하게 됩니다.  
(처음 설치 과정에서는 약 15분가량 소요될 수 있으며, 다음 실행부터는 약 5분 내로 실행할 수 있습니다.)

명령 프롬프트 중간에 `You can now view mimic-recording-studio in the browser.`라는 메시지가 출력되면, `http://localhost:3000/`에 접속하여 mimic-recording-studio를 사용할 수 있습니다.

이 때, Mimic Recording Studio 접속은 **반드시 Google 크롬 브라우저로 접속**하셔야 합니다.  
다른 브라우저에서는 약간 버그가 있는 것 같습니다.


## Mimic Recording Studio 사용방법

Mimic Recording Studio의 첫 접속시에는 사용자 계정을 생성하게 되는데, 사용자 이름은 큰 의미가 없으므로 아무렇게나 입력하고 넘어가시면 됩니다.

단, Mimic Recording Studio는 계정 정보를 브라우저에 저장하므로, 한 번 녹음을 시작했다면, 다른 브라우저에서는 녹음을 이어서 할 수 없습니다.  
반드시 처음 접속하여 녹음한 브라우저로 계속하여 녹음을 진행하셔야 합니다.

녹음 페이지에 처음 접속하면 브라우저가 마이크 사용 권한을 요청하게 됩니다.  
이때, 사용하실 마이크를 선택하여 권한을 허용해주세요.

녹음 화면 정 중앙에는 주황색으로 읽어야 할 문장이 표시됩니다.
문장 녹음은 대략 다음과 같은 순서로 진행됩니다.

1. 스페이스바를 누르고 녹음을 시작하고, 화면에 표시된 문장을 읽습니다.
2. ESC를 눌러 녹음을 정지합니다.
3. R 키를 눌러 녹음이 정상적으로 잘 되었는지 확인합니다.
4. 녹음이 마음에 들지 않으면, ESC를 한번 더 눌러 녹음된 내용을 제거한 후, 다시 1번부터 시작합니다.
5. 녹음이 마음에 들면, 오른쪽 방향키를 눌러 녹음 내용을 저장하고 다음 문장으로 넘어갑니다.

녹음 과정이 조금 익숙해진다면, 4번 과정(녹음 확인)은 생략할 수 있습니다.


## 음성 데이터셋 변환

Mimic Recording Studio로 음성 녹음을 충분히 수행했다면, 실제 머신 러닝에서 사용할 수 있는 파일 형식으로 녹음된 데이터를 변환해야 합니다.

녹음된 데이터를 변환하는 과정은 다음과 같습니다.

1. 파일 탐색기로 Mimic Recording Studio의 `start-windows.bat` 파일이 있는 폴더를 엽니다.
2. 폴더 내의 빈 공간을 키보드 시프트 키를 누른 상태로 우클릭합니다.
3. 나타난 메뉴에서 `여기에 PowerShell 창 열기` 또는 `여기에서 명령 프롬프트 창 열기`를 선택합니다.
4. 열린 PowerShell 창 또는 명령 프롬프트 창은 잠시 그대로 두고, 파일 탐색기에서 `backend/audio_files` 폴더를 엽니다.
5. `audio_files` 폴더 내부에 존재하는 폴더 이름을 복사해둡니다.  
(예시: `110d3ec5-4a5a-0f63-a8a1-13345418c85b`)
6. 열린 PowerShell 창 또는 명령 프롬프트 창에 `docker-compose run --rm backend python generate_ljs_audio_text.py <복사한 폴더 이름>`을 입력합니다.  
(예시: `docker-compose run --rm backend python generate_ljs_audio_text.py 110d3ec5-4a5a-0f63-a8a1-13345418c85b`)
7. 실행이 완료될 때까지 기다립니다.
8. 위 과정을 완료하면, `backend` 폴더 내부에 `filelists` 폴더가 생성됩니다.  

여기까지 완료하면 음성 데이터셋 변환 과정은 모두 완료가 됩니다.  
이후 머신 러닝을 구글 코랩을 통해 진행하기 위해서 해당 파일을 구글 드라이브에 업로드하는 과정이 필요합니다.

**참고로, 개인용 구글 드라이브는 약 15GB의 용량을 무료로 제공합니다.**  
**일반적인 목적으로 사용하기에는 충분한 공간이기는 하지만, 실제 머신 러닝을 수행하고 그 결과물을 저장하기 위해서는 15GB의 용량은 조금 아슬아슬할 수 있습니다.**  
**따라서, 가능하면 TTS 학습용 구글 계정을 따로 만들어서 사용하시는 것을 추천드립니다.**

구글 드라이브에 해당 파일을 업로드하는 방법은 다음과 같습니다.

1. `filelists` 폴더를 파일 압축 프로그램을 이용하여 `filelists.zip` 파일로 압축합니다.
2. [구글 드라이브](http://drive.google.com/)에 구글 크롬으로 접속합니다.
3. `새로 만들기 -> 폴더` 버튼을 눌러 드라이브 경로 최상단에 `Colab Notebooks` 폴더를 만듭니다.
4. `Colab Notebooks` 폴더를 더블 클릭하여 폴더 내부로 이동합니다.
5. `새로 만들기 -> 폴더` 버튼을 눌러 `Colab Notebooks` 폴더 안에 `data` 폴더를 만듭니다.
6. `data` 폴더를 더블 클릭하여 폴더 내부로 이동합니다.
7. 압축한 `filelists.zip` 파일을 구글 크롬으로 드래그 앤 드랍하여 파일을 업로드합니다.
8. 업로드가 정상적으로 완료될 때까지 기다립니다.

위 과정을 모두 완료하면 머신 러닝을 진행하기 위한 준비가 완료된 것입니다.


## 녹음시 주의사항

1. Mimic Recording Studio는 한번 저장한 녹음 내용을 삭제할 수 있는 기능을 제공하지 않습니다.  
따라서 잘못 녹음된 내용을 제거하시려면, 직접 녹음 파일을 찾아 삭제해야 합니다.  
파일 삭제는 Mimic Recording Studio가 설치된 폴더 내의 `backend/audio_files/` 폴더에서 직접 WAV 파일을 찾아 지우시면 됩니다.  
(최근 생성된 파일 순으로 정렬하시면 찾기 더 쉽습니다.)
2. SleepingCE Speech Dataset을 기반으로 학습을 진행하실 경우 약 1시간, 처음부터 학습을 진행하실 경우 최소 3시간의 음성 데이터가 필요합니다.  
음성 데이터의 총 길이는 Mimic Recording Studio 녹음 화면 좌상단에서 확인하실 수 있습니다.
3. 문장을 읽을 때, 최대한 일정한 속도로 읽습니다.  
어느 문장만 길게 늘여서 읽고, 또 어느 문장은 아주 천천히 읽는다면 학습이 잘 되지 않을 수 있습니다.
4. 문장부호인 물음표, 느낌표, 마침표는 분명히 구분해서 읽습니다.  
5. 전체 녹음 과정에서 입과 마이크의 간격을 일정하게 유지하고, 동일한 성량으로 읽습니다.  
6. 숨소리, 키보드소리, 에어컨소리 등 잡음이 최대한 들어가지 않도록 주의합니다.  
마이크는 우리에 귀로 들을 수 있는 소리를 모두 녹음한다고 생각하셔야 합니다.  
따라서 아주 작은 소음이라도 녹음 중간에 들어갔다면, 해당 녹음은 다시 진행하시는 편이 좋습니다.
7. 여러 날에 걸쳐 녹음할 때에는, 다른 날에 녹음한 파일을 들어보며 최대한 비슷하게 읽습니다.  
특히 위 주의사항 중 3, 5번 항목을 신경써주세요.
8. Mimic Recording Studio는 약간 버그가 있어서, 5문장 정도 녹음하면 정상적으로 동작하지 않습니다.  
따라서, 1~2문장을 녹음한 후에는 크롬을 새로고침해주시는 것이 좋습니다.  
이외에도 화면이 느려진다거나, 녹음이 자꾸 멈춘다거나 하는 문제가 있을 때마다 새로고침을 해주세요.