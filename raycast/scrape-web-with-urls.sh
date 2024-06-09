#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Scrape Web with URLs
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🤖

# Documentation:
# @raycast.description URLのリストから（改行）すべてのサイトのコンテンツを取得し、クリップボードに保存する
# @raycast.author hyasssy

source ./env/bin/activate
python src.py

