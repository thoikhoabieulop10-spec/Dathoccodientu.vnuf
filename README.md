# Dathoccodientu — trang dự án drone

Web tĩnh (HTML + CSS + JS thuần), không cần build. Deploy lên Vercel.
Mọi file (html, ảnh .webp, firmware .zip, style.css, site.js) nằm chung ở ngoài cùng, không có thư mục con.

## Thêm phiên bản mới (VD: V5)
1. Copy `v4.html` → `v5.html`, sửa nội dung (các khung `todo`).
2. Mở `site.js`, thêm 1 dòng vào `projects`:
   `{ href: "v5.html", title: "Quadcopter V5", status: "wip" },`
3. Thêm dòng vào `log` (nhật ký) nếu muốn.
4. Upload firmware `FC_UAV_V5.zip` lên ngoài cùng repo.
5. `git push` — Vercel tự deploy lại.

Menu trái, trang chủ, nhật ký tự cập nhật theo `site.js`.

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
