# Dathoccodientu — trang dự án drone

Web tĩnh (HTML + CSS + JS thuần), không cần build. Deploy lên Vercel.
Mọi file (html, ảnh .webp, firmware .zip, style.css, site.js) nằm chung ở ngoài cùng, không có thư mục con.

## Quy chuẩn trang dự án
Mọi trang dự án dùng chung một khung, theo đúng thứ tự (mục nào không có thì bỏ, số tự đánh lại):

| # | id | Tiêu đề | Nội dung |
|---|----|---------|----------|
| 1 | `gioi-thieu` | Giới thiệu | Dự án làm gì; h3 "Khác gì so với bản trước" nếu là bản nâng cấp |
| 2 | `linh-kien` | Linh kiện | `<div class="parts" data-parts="...">` + h3 "Danh sách linh kiện" (bảng SL / giá) |
| 3 | `so-do` | Sơ đồ đấu dây | Bảng chân hoặc link trang sơ đồ (`doc-link`) |
| 4 | `lap-rap` | Lắp ráp & hiệu chỉnh | Thứ tự lắp, in 3D, hiệu chuẩn |
| 5 | `phan-mem` | Phần mềm | Firmware, cách nạp, thông số |
| 6 | `su-dung` | Cách sử dụng | Nút, công tắc, chế độ |
| 7 | `hoi-dap` | Hỏi đáp & lưu ý | h3 = câu hỏi |
| 8 | `tai-ve` | Tải về | `<ul class="downloads">` |

Đầu trang luôn là: h1 → `sub` → `summary` → ảnh `photos` → `tiktok-links` → `toc`. Cuối trang: `pager`.
Ô tóm tắt, mục lục, menu, thẻ trang chủ, danh sách tải về ở trang chủ, nút trước/sau đều do `site.js` tự tạo.
Ghi chú: `note` (vàng) cho mẹo, `warn` (đỏ) cho cảnh báo an toàn. Ảnh linh kiện 480×480, nền trắng, `.webp`.

## Thêm dự án / phiên bản mới (VD: V5)
1. Copy `mau-du-an.html` → `v5.html`, điền nội dung vào đúng các mục chuẩn.
2. Mở `site.js`, thêm 1 dòng vào `projects` (id `"v5"`, `group`, `short`, `img`, `main`, `updated`, `files`).
   Dự án thuộc nhóm mới thì thêm nhóm vào `groups`.
3. Linh kiện mới: thêm vào `parts`. Trang sơ đồ mới: thêm vào `docs` (có `group`).
4. Thêm dòng vào `log` (nhật ký, có `project`).
5. Upload tất cả lên ngoài cùng repo (GitHub web không giữ thư mục con khi kéo thả).

## Video TikTok
Dán vào trang:
<div class="video"><figure>
  <iframe src="https://www.tiktok.com/embed/v2/VIDEO_ID" allowfullscreen loading="lazy"></iframe>
  <figcaption>Tên video</figcaption>
</figure></div>
VIDEO_ID là dãy số cuối link video TikTok.

## Deploy lần đầu
1. Tạo repo GitHub mới, upload toàn bộ thư mục này.
2. vercel.com → Add New → Project → Import repo → Framework: Other → Deploy.
3. (Tuỳ chọn) Settings → Domains để gắn tên miền riêng.
