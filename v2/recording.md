# 음성 녹음

다음의 내용을 따라할 때, 아래 튜토리얼 유튜브 영상을 참고하시면 더 좋습니다.

!> 아래 영상은 최신 버전의 내용이 아닌 이전 버전의 내용을 바탕으로 설명합니다.  
내용을 참고하실 때 유의하시기 바랍니다.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3iZMIprnZOo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

자신의 목소리로 TTS를 만들기 위해서는 먼저 자신의 목소리를 잘 녹음해야 합니다.  
특히 이 가이드에서는 모델 학습에 바로 사용할 수 있는 데이터로 바로 녹음할 수
있도록, Mimic Recording Studio라는 프로그램을 사용하여 녹음을 진행합니다.

그러나 [Mimic Recording Studio의 원본 프로젝트](https://github.com/MycroftAI/mimic-recording-studio)는
한국어를 위해 개발되어 있지 않으므로, 바로 녹음을 진행할 수 있도록 수정한
버전을 사용할 것입니다.

## Mimic Recording Studio 다운로드 및 실행

앞으로 진행할 내용에 맞게 수정된 Mimic Recording Studio는 아래 링크에서
내려받으실 수 있습니다.

> [Mimic Recording Studio 다운로드](https://drive.google.com/file/d/1qWWBVerugPedNvaUbqYqwPhbIvWXnFxN/view?usp=sharing)

내려받은 파일을 압축을 해제한 상태에서 `run-server.bat` 파일을 실행하면 명령
프롬프트가 실행되고, Mimic Recording Studio의 서버를 실행하게 됩니다.  

명령 프롬프트 중간에 `* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)`라는
메시지가 출력되면, `http://localhost:5000/`에 Google 크롬 브라우저로 접속하여
mimic-recording-studio를 사용할 수 있습니다.

![mimic-recording-studio 명령 프롬프트](/_media/mimic-recording-studio-cmd.png ':size=800')

이 때, Mimic Recording Studio 접속은 **반드시 Google 크롬 브라우저로**
**접속**하셔야 합니다.  
다른 브라우저에서는 약간의 버그가 발생할 수 있습니다.


## Mimic Recording Studio 사용방법

### 사용자 계정 생성

![mimic-recording-studio 첫 접속 화면](/_media/mimic-recording-studio-1.png ':size=800')

Mimic Recording Studio의 첫 접속시에는 사용자 계정을 생성하게 되는데, 사용자
이름은 큰 의미가 없으므로 아무렇게나 입력하고 `RECORD` 버튼을 클릭하여
넘어가시면 됩니다.

단, Mimic Recording Studio는 계정 정보를 브라우저에 저장하므로, 한 번 녹음을
시작했다면, 다른 브라우저에서는 녹음을 이어서 할 수 없습니다. 반드시 처음
접속하여 녹음한 브라우저로 계속하여 녹음을 진행하셔야 합니다.


### 마이크 권한 허용 및 사용할 마이크 변경

![mimic-recording-studio 마이크 권한 요청](/_media/mimic-recording-studio-mic-1.png ':size=400')

녹음 페이지에 처음 접속하면 브라우저가 마이크 사용 권한을 요청하게 됩니다. 이
때, `허용` 버튼을 클릭하여 마이크 권한을 허용해주세요.

![mimic-recording-studio 마이크 권한 변경](/_media/mimic-recording-studio-mic-2.png ':size=400')

만약 PC에 하나 이상의 마이크가 있다면, 사용하실 마이크를 직접 선택해야 할 수도
있습니다. 이 경우, 주소 표시줄 우측의 카메라 모양 버튼을 클릭하고, `관리`
버튼을 클릭하면 사용할 마이크를 변경할 수 있는 설정 페이지로 접속할 수 있습니다.


### 음성 녹음

![mimic-recording-studio 녹음 화면](/_media/mimic-recording-studio-2.png ':size=800')

녹음 화면 정 중앙에는 주황색으로 읽어야 할 문장이 표시됩니다.

음성 녹음은 다음과 같은 순서로 진행됩니다.

1. 스페이스바를 누르고 녹음을 시작하고, 화면에 표시된 문장을 읽습니다.
1. ESC를 눌러 녹음을 정지합니다.
1. R 키를 눌러 녹음이 정상적으로 잘 되었는지 확인합니다.
1. 녹음이 마음에 들지 않으면, ESC를 한번 더 눌러 녹음된 내용을 제거한 후, 다시
스페이스바를 눌러 녹음을 시작합니다.
1. 녹음이 마음에 들면, 오른쪽 방향키를 눌러 녹음 내용을 저장하고 다음 문장으로
넘어갑니다.

!> Mimic Recording Studio는 약간 버그가 있어서, 5문장 정도 녹음하면 정상적으로
동작하지 않을 수 있습니다.  
따라서, 2~3문장을 녹음한 후에는 페이지를 새로고침 해주시는 것을 권장합니다.   
이외에도 화면이 느려진다거나, 녹음이 자꾸 멈춘다거나 하는 문제가 있을 때마다
새로고침을 해주세요.

?> :memo: 녹음 과정이 조금 익숙해진다면, 녹음 확인 과정은 생략하셔도 괜찮습니다.

?> :memo: Mimic Recording Studio는 한번 저장한 녹음 내용을 삭제할 수 있는 기능을
제공하지 않습니다.  
따라서 잘못 녹음된 내용을 제거하시려면, 직접 녹음 파일을 찾아 삭제해야 합니다.  
파일 삭제는 Mimic Recording Studio 폴더 내의 `audio_files` 폴더에서 직접
WAV 파일을 찾아 지우시면 됩니다.  
(최근 생성된 파일 순으로 정렬하시면 찾기 더 쉽습니다.)

음성 녹음은 언제든지 중단할 수 있으며, Mimic Recording Studio를 다시 시작하면
마지막으로 녹음한 부분부터 다시 이어서 녹음할 수 있습니다.

Mimic Recording Studio에서 제공하는 모든 문장을 읽어야 할 필요는 없으므로,
충분한 분량을 녹음했다고 판단되면 음성 녹음을 종료하셔도 됩니다. 만약 녹음된
음성이 부족하다고 느껴지신다면 Mimic Recording Studio를 다시 시작해서 녹음을
이어서 진행하시면 됩니다.

?> :memo: 녹음한 음성 데이터의 길이는 Mimic Recording Studio 녹음 화면
좌상단에서 확인하실 수 있습니다.  
모델 학습을 위해 최소 1시간 이상의 음성 데이터를 녹음하는 것 권장하며, 더 많이
녹음할수록 더 잘 학습될 가능성이 높습니다.

### 녹음시 주의사항

음성을 녹음하실 때에 주의할 사항은 다음과 같습니다.

1. 문장을 읽을 때, 최대한 일정한 속도로 읽습니다.  
어느 문장만 길게 늘여서 읽고, 또 어느 문장은 아주 천천히 읽는다면 학습이 잘
되지 않을 수 있습니다.
1. 문장부호인 물음표, 느낌표, 마침표는 분명히 구분해서 읽습니다.  
1. 전체 녹음 과정에서 입과 마이크의 간격을 일정하게 유지하고, 동일한 성량으로
읽습니다.  
1. 숨소리, 키보드소리, 에어컨소리 등 잡음이 최대한 들어가지 않도록 주의합니다.  
마이크는 우리에 귀로 들을 수 있는 소리를 모두 녹음한다고 생각하셔야 합니다.  
따라서 아주 작은 소음이라도 녹음 중간에 들어갔다면, 해당 녹음은 다시 진행하시는
편이 좋습니다.
1. 여러 날에 걸쳐 녹음할 때에는, 다른 날에 녹음한 파일을 들어보며 최대한
비슷하게 읽습니다.  

## 음성 데이터 변환

Mimic Recording Studio로 음성 녹음을 충분히 수행했다면, 실제 모델 학습에서
사용할 수 있는 파일 형식으로 녹음된 데이터를 변환해야 합니다.

녹음된 데이터를 변환하는 과정은 다음과 같습니다.

1. Mimic Recording Studio 폴더의 `audio_files` 폴더 내에 생성된 폴더 이름을
복사합니다. (예시: `627cae73-8cc0-2a19-4943-a17583120d56`)
1. Mimic Recording Studio의 `run-ljs-converter.bat` 파일을 우클릭하고,
메뉴에서 `편집` 항목을 선택합니다.
1. 다음과 같이, 열린 메모장에서 `ljs-converter.exe`으로 시작하는 줄의 마지막
부분을 복사해둔 폴더명으로 변경한 후 저장합니다.
```batch
@echo off
setlocal
chcp 65001
cd /D "%~dp0"
SET PATH=%PATH%;%~dp0ffmpeg
ljs-converter.exe 627cae73-8cc0-2a19-4943-a17583120d56
endlocal
pause
```
1. 저장한 `run-ljs-converter.bat` 파일을 더블 클릭하여 실행하고, 작업이 완료될
때까지 기다립니다. 다음과 같이 표시되면 작업이 완료된 것입니다.
![ljs-converter 명령 프롬프트](/_media/ljs-converter-cmd.png ':size=800')
1. 위 과정을 완료하면, Mimic Recording Studio 폴더에 `filelists` 폴더가 생성
됩니다.

!> Mimic Recording Studio 폴더에 `filelists` 폴더가 이미 존재할 경우, 해당
폴더를 다른 곳으로 옮기거나 삭제해야 합니다.

여기까지 완료하면 음성 데이터셋 변환 과정은 모두 완료가 됩니다.  
앞으로 구글 코랩을 통해 모델 학습을 진행하기 위해서 해당 파일을 구글 드라이브에
업로드해야 합니다.

?> :memo: 개인용 구글 드라이브는 약 15GB의 용량을 무료로 제공합니다.  
기존에 사용하시던 구글 계정을 모델 학습에 그대로 사용하실 경우, 모델
학습을 진행하면서 생성한 파일들을 저장하면서 용량이 부족해질 수 있습니다.  
따라서, 가능하면 **TTS 학습용 구글 계정을 따로 만들어서 사용하시는 것을**
**추천**합니다.

구글 드라이브에 해당 파일을 업로드하는 방법은 다음과 같습니다.

1. `filelists` 폴더를 파일 압축 프로그램을 이용하여 `filelists.zip` 파일로
압축합니다.  
`filelists.zip`를 반디집으로 열었을 때, 다음과 같이 표시되어야 합니다.  
![filelists.zip](/_media/filelists-zip.png ':size=600')
1. [구글 드라이브](http://drive.google.com/)에 구글 크롬으로 접속합니다.
1. `새로 만들기 -> 폴더` 버튼을 눌러 드라이브 경로 최상단에 `Colab Notebooks`
폴더를 만듭니다.
1. `Colab Notebooks` 폴더를 더블 클릭하여 폴더 내부로 이동합니다.
1. `새로 만들기 -> 폴더` 버튼을 눌러 `Colab Notebooks` 폴더 안에 `data` 폴더를
만듭니다.
1. `data` 폴더를 더블 클릭하여 폴더 내부로 이동합니다.
1. 압축한 `filelists.zip` 파일을 구글 크롬으로 드래그 앤 드랍하여 파일을
업로드합니다.
1. 업로드가 정상적으로 완료될 때까지 기다립니다.

정상적으로 업로드를 완료하면, 아래 화면과 같이 `내 드라이브 > Colab Notebooks > data`에
filelists.zip 파일이 표시되어야 합니다.

![구글 드라이브에 업로드된 filelists.zip](/_media/google-drive-filelists-zip.png ':size=800')

위 과정을 모두 완료하면 모델 학습을 진행하기 위한 준비가 완료된 것입니다.




