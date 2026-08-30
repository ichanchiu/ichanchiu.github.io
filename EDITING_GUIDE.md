# 網站內容編輯指南（直接使用 GitHub）

這份指南寫給不熟悉程式或 Git 的使用者。多數網站文字都放在 `_data` 資料夾內的 `.yml` 檔案中；只要在 GitHub 網頁上修改正確的檔案，通常不必下載程式，也不必改動網頁版型。

網站同時有英文與繁體中文版。看到 `en:` 與 `zh:` 時，請盡量一起更新，避免兩個語言版本內容不一致。

## 一、各檔案負責什麼內容？

| 檔案 | 內容 |
| --- | --- |
| `_data/profile.yml` | 姓名、職稱、學校、研究簡介、照片、電子郵件、電話、辦公室與個人連結 |
| `_data/publications.yml` | 已出版或已接受的期刊論文 |
| `_data/working_papers.yml` | 工作論文、投稿狀態、合著者與論文／模型／資料連結 |
| `_data/research.yml` | 研究領域、研究摘要與主題關鍵字 |
| `_data/teaching.yml` | 授課科目與教學資源連結 |

其他履歷內容也採同樣方式管理，例如 `_data/appointments.yml`、`_data/education.yml` 與 `_data/grants.yml`。

## 二、如何直接在 GitHub 編輯？

1. 登入 GitHub，進入網站的 repository：`ichanchiu/ichanchiu.github.io`。
2. 點進 `_data` 資料夾，再點選要修改的檔案，例如 `working_papers.yml`。
3. 點右上角的鉛筆圖示（**Edit this file**）。如果看不到鉛筆，可能是尚未登入，或帳號沒有編輯權限。
4. 只修改需要更新的文字，並保留原有欄位名稱、冒號與縮排。
5. 編輯完後，先查看 **Changes**／差異預覽：紅色是刪除，綠色是新增。確認沒有整段內容被意外刪除。
6. 點 **Commit changes…**。提交訊息請簡短說明這次變更，例如 `Update working paper status`。
7. 建議選擇 **Create a new branch for this commit and start a pull request**，送出 Pull Request（PR）後再檢查與合併；若是非常小且已確認無誤的修改，也可直接提交到 `main`。

> GitHub 的檔案編輯畫面只能預覽「改了哪些文字」，不能在提交前完整顯示網站畫面。採用新分支與 Pull Request 是較安全的做法，因為在合併到 `main` 前仍可再次檢查或修正。

## 三、不同資料檔如何修改？

### 1. 個人資料：`_data/profile.yml`

常用欄位包括：

- `name`：姓名。
- `title`：職稱。
- `institution`：服務學校。
- `headline`：首頁主要研究標語。
- `summary`：個人研究簡介。
- `portrait`：保留給未來更換照片使用；目前版面刻意不顯示照片。之後若要啟用，請先上傳新照片並確認版型。
- `email`、`phone`、`office`：聯絡資訊。
- `links`：ORCID、GitHub、LinkedIn、Hugging Face、系所頁面等連結。

只需更改冒號右邊的內容，不要把 `en:`、`zh:`、`links:` 等欄位名稱改掉。

### 2. 已出版論文：`_data/publications.yml`

每篇論文都從同一縮排層級的 `- id:` 開始。新增論文時，最安全的方式是複製一篇現有論文的完整區塊，貼到檔案最上方或最下方，再逐欄修改。

重要欄位：

- `id`：網站內部識別碼，必須唯一；建議只用小寫英文字母、數字與連字號，例如 `text-risk-2026`。
- `title`：論文題名。
- `authors`：作者清單；自己的作者資料請保留 `self: true`。
- `journal`、`year`、`volume`、`pages` 或 `article_number`：出版資訊；沒有的欄位可省略，不要填假的占位內容。
- `status.en`、`status.zh`：英文與中文出版狀態。
- `doi`、`url`：有正式資料時再填；尚未有 DOI 時可省略。

### 3. 工作論文：`_data/working_papers.yml`

這裡適合放工作論文、投稿中論文、修改後再審論文，以及仍在發展中的研究。每筆資料使用 `section` 決定顯示區段：

- `under-review`：審查中或修改後再審。
- `working-paper`：已有題名的工作論文。
- `research-in-progress`：尚在早期階段或題名未定的研究。

`venue`、`venue_short` 與 `links` 都是選用欄位；沒有資料時可完全省略。

#### 安全的新增範例

請把下面整個區塊貼到 `_data/working_papers.yml` 的最下方，再替換內容。每一層都使用 **2 個半形空格**縮排。

```yaml

- id: "example-working-paper"
  section: "working-paper"
  title: "A Working Paper Title"
  authors:
    - name: "I-Chan Chiu"
      short: "I. Chiu"
      self: true
    - name: "Coauthor Name"
      short: "C. Name"
  status:
    en: "Working Paper"
    zh: "工作論文"
  links:
    - label: "SSRN"
      url: "https://papers.ssrn.com/example"
```

如果目前沒有公開連結，請刪除整段 `links:`，不要留下空白網址：

```yaml
- id: "example-working-paper"
  section: "working-paper"
  title: "A Working Paper Title"
  authors:
    - name: "I-Chan Chiu"
      short: "I. Chiu"
      self: true
  status:
    en: "Working Paper"
    zh: "工作論文"
```

#### 題名尚未定案時

可以先使用暫定題名，並把狀態設為 **Research in Progress／研究進行中**。之後題名確定，只要更新 `title` 與狀態即可；`id` 建議不要再改，以免既有網址或內部參照失效。

```yaml
- id: "new-research-project"
  section: "research-in-progress"
  title: "Tentative Title of the Research Project"
  authors:
    - name: "I-Chan Chiu"
      short: "I. Chiu"
      self: true
  status:
    en: "Research in Progress"
    zh: "研究進行中"
```

若投稿期刊或會議尚未確定，先不要加入 `venue`；確定後再補上即可。

### 4. 研究領域：`_data/research.yml`

每個研究領域包含：

- `id`：唯一的小寫英文識別碼。
- `number`：畫面上的排序編號，建議保留引號，例如 `"01"`，避免前面的 0 消失。
- `title`：中英文研究領域名稱。
- `summary`：中英文簡介。
- `topics`：中英文關鍵字清單。

調整順序時，請移動整個區塊，不要只移動 `title` 或 `topics`。新增領域時，也要同時補上中英文內容。

### 5. 教學內容：`_data/teaching.yml`

這個檔案分成兩部分：

- `courses`：課程名稱清單，每門課都有 `en` 與 `zh`。
- `resources`：教學資源，每筆通常包含中英文 `title`、`description`、`url` 與 `access`。

若教學資源需要登入，請保留或加入 `restricted: true`。新增課程或資源時，建議複製同一區段中的既有項目，再修改文字與網址。

## 四、YAML 最容易出錯的地方

YAML 對空格與符號很敏感。請特別注意：

1. **只用半形空格，不要用 Tab。** 目前檔案以每層 2 個空格縮排。
2. **同一層內容要對齊。** 例如 `en:` 與 `zh:` 的起始位置必須相同。
3. **冒號後要有一個空格。** 正確：`title: "Paper Title"`；錯誤：`title:"Paper Title"`。
4. **一般文字建議加半形雙引號。** 題名含有冒號、`#`、`&`，或開頭像數字時，使用引號尤其重要。
5. **不要使用 Word 式彎引號當作 YAML 引號。** 外層請使用半形直引號 `"`；中文字中的標點可以照常使用。
6. **雙引號內若也需要雙引號，要加反斜線。** 例如：`title: "The \"New\" Model"`。
7. **清單項目以 `-` 開始。** `- id:`、`- name:`、`- label:` 都代表一筆新的資料；不要漏掉連字號。
8. **不要重複 `id`。** 每篇論文與每個研究領域的 `id` 都必須唯一。
9. **不要留下不完整欄位。** 沒有 DOI、網址或期刊資訊時，直接省略該欄位，比填空字串或 `TBD` 安全。
10. **不要一次重新排版整份檔案。** 小範圍修改較容易在差異預覽中發現問題。

下面是常見的縮排錯誤：

```yaml
# 錯誤：zh 沒有和 en 對齊
status:
  en: "Working Paper"
   zh: "工作論文"
```

正確寫法：

```yaml
status:
  en: "Working Paper"
  zh: "工作論文"
```

## 五、預覽、提交與部署流程

### 提交前檢查

在 GitHub 編輯器的 **Changes**／差異預覽中確認：

- 只改到預期的檔案與資料區塊。
- 中英文內容都有更新。
- 縮排與前後項目一致。
- 沒有誤刪 `-`、冒號或引號。
- 新增的 `id` 沒有和既有項目重複。

### 建議的提交流程

1. 點 **Commit changes…**。
2. 填寫清楚的提交訊息，例如 `Add new working paper`。
3. 建議建立新分支並開 Pull Request。
4. 在 Pull Request 的 **Files changed** 再檢查一次。
5. 確認無誤後，點 **Merge pull request**，讓變更進入 `main`。

如果選擇直接提交到 `main`，則會略過 Pull Request；請務必在提交前仔細看差異預覽。

### 網站部署與上線確認

變更進入 `main` 後，GitHub Pages 會自動重建並發布網站，通常需要幾分鐘：

1. 在 repository 的 **Actions** 頁面查看 Pages 建置是否完成；綠色勾號表示成功。
2. 也可在 repository 首頁右側的 **Deployments** 查看最新部署。
3. 開啟 `https://ichanchiu.github.io/`，並檢查英文與繁體中文相關頁面。
4. 若仍看到舊內容，等待一兩分鐘後重新整理；必要時使用瀏覽器的強制重新整理。

如果建置出現紅色叉號，先不要繼續新增其他內容。回到剛才的提交或 Pull Request，檢查 YAML 的縮排、冒號與引號；不確定時，可先把最近一次修改還原，讓網站恢復正常，再尋求協助。

## 六、最後的安全原則

- 一次只做一類更新，例如先新增論文，再另外更新課程。
- 優先複製既有資料區塊，不要從空白開始猜欄位名稱。
- 不確定的資料可以先省略，不要填寫假的 DOI、網址、期刊或狀態。
- 涉及電子郵件、電話、辦公室或其他個人資訊時，上線前請再次確認是否適合公開。
- 每次更新後都檢查英文與繁體中文頁面。
