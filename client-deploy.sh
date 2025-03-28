#!/bin/bash

# === 환경 변수 설정 ===
SERVER_IP="52.231.117.130"
USER="dbs"
KEY_PATH="~/.ssh/id_rsa"
LOCAL_BUILD_PATH="./build/"
REMOTE_PATH="/home/dbs/DBS-FE"


echo " 빌드 파일 업로드 중..."
scp -i "$KEY_PATH" -r "$LOCAL_BUILD_PATH"* "$USER@$SERVER_IP:$REMOTE_PATH/" || { echo "❌ 파일 전송 실패!"; exit 1; }
