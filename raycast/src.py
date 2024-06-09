import requests
from bs4 import BeautifulSoup
import pyperclip

# クリップボードからURLリストを取得
clipboard_text = pyperclip.paste()
urls = clipboard_text.strip().split('\n')

# クリップボードに保存する全てのコンテンツを格納する変数
all_content = ""

# 各URLに対して処理を行う
for url in urls:
    url = url.strip()
    if url:
        try:
            # URLにアクセスしてHTMLコンテンツを取得
            response = requests.get(url)
            response.raise_for_status()
            html_content = response.text

            # BeautifulSoupを使用してテキストコンテンツを抽出
            soup = BeautifulSoup(html_content, 'html.parser')
            text_content = soup.get_text(separator='\n', strip=True)

            # コンテンツを追加
            all_content += text_content + "\n\n"
        except requests.exceptions.RequestException as e:
            print(f"Error accessing {url}: {e}")

# 取得したコンテンツをクリップボードに保存
pyperclip.copy(all_content)

print("コンテンツをクリップボードに保存しました。")
