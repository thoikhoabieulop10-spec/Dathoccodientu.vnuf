/* =====================================================================
 *  SITE.JS — FILE DUY NHẤT CẦN SỬA KHI THÊM PHIÊN BẢN MỚI
 *
 *  Thêm bản V5:
 *    1. Copy v4.html thành v5.html, sửa nội dung bên trong
 *    2. Thêm một dòng vào mảng `projects` bên dưới
 *    3. (tuỳ chọn) thêm một dòng vào `log` để ghi nhật ký cập nhật
 *  Menu bên trái, trang chủ và nhật ký sẽ tự cập nhật theo.
 * ===================================================================== */

const SITE = {
  name: "Dathoccodientu",
  tld: ".net",
  slogan: "Tài liệu chia sẻ miễn phí",
  tiktok: "https://www.tiktok.com/@dathoccodientu.03",

  // status: "done" = đã có | "wip" = đang làm | "soon" = sắp ra
  projects: [
    { href: "v1.html", title: "Quadcopter V1 — tự cân bằng",        status: "done" },
    { href: "v2.html", title: "Quadcopter V2 — giữ độ cao", status: "done" },
    { href: "v3.html", title: "Quadcopter V3 — GPS + la bàn",        status: "done" },
    { href: "v4.html", title: "Quadcopter V4 — GPS hoàn thiện",      status: "done" },
  ],

  docs: [
    { href: "so-do-v1.html", title: "Sơ đồ đấu dây V1" },
    { href: "so-do-v2.html", title: "Sơ đồ đấu dây V2" },
    { href: "so-do-v4.html", title: "Sơ đồ đấu dây V3 / V4" },
  ],

  // Nhật ký cập nhật — mới nhất để trên cùng
  log: [
    { date: "29/10/2026", text: "Đăng bản V4: đọc GPS bằng UBX-NAV-PVT, giữ độ cao kéo về mốc, tune xong giữ vị trí, thêm 2 sketch kiểm tra." },
    { date: "29/10/2026", text: "Đăng bản V3: GPS GEP-M10 + la bàn IST8310, giữ vị trí ngoài trời, giữ hướng mũi, telemetry ELRS." },
    { date: "29/10/2026", text: "Chuyển trang sang Vercel." },
    { date: "",           text: "Đăng bản V2: thêm BMP388 giữ độ cao, chuyển sang bộ thu ELRS có telemetry về tay cầm." },
    { date: "",           text: "Đăng bản V1: STM32F405 + ICM-20602, chỉ tự cân bằng." },
  ],

  /* Ảnh linh kiện — file nằm trong .
   * Trong trang, đặt  <div class="parts" data-parts="frame,motor,..."></div>
   * là tự hiện khung ảnh. Thêm linh kiện mới: thêm 1 dòng ở đây.        */
  parts: {
    frame:   { img: "frame-f450.webp",    name: "Khung F450",              note: "Chữ X, trục 450mm" },
    motor:   { img: "motor-2212.webp",    name: "Motor DJI 2212 920KV",    note: "2 thuận, 2 nghịch" },
    prop:    { img: "propeller.webp",     name: "Cánh quạt",               note: "8045 với pin 4S" },
    damping: { img: "damping-plate.webp", name: "Đế giảm rung",            note: "Gắn bo mạch lên khung" },
    tx:      { img: "fs-i6.webp",         name: "Tay FlySky FS-i6",        note: "2.4GHz" },
    ia6b:    { img: "fs-ia6b.webp",       name: "Bộ thu FS-iA6B",          note: "PPM 8 kênh" },
    icm:     { img: "icm20602.webp",      name: "ICM-20602",               note: "Gyro + gia tốc, SPI, 3.3V" },
    bmp:     { img: "bmp388.webp",        name: "BMP388",                  note: "Áp suất, SPI — che mút" },
    gps:     { img: "gps-m10.webp",       name: "GPS GEP-M10",             note: "u-blox M10, UART" },
    mag:     { img: "ist8310.webp",       name: "La bàn IST8310",          note: "I2C, chân 3V3" },
    pocket:  { img: "radiomaster-pocket.webp", name: "Tay RadioMaster Pocket", note: "ELRS 2.4GHz, EdgeTX" },
    elrs:    { img: "elrs-rx.webp",       name: "Bộ thu ELRS 2400RX",      note: "Đặt 2 chân sang CRSF" },
  },
};

/* ---------------------------------------------------------------------
 *  Phần dưới tự dựng banner, menu, chân trang. Không cần sửa.
 * ------------------------------------------------------------------- */
(function () {
  const here = location.pathname.split("/").pop().replace(/\.html$/, "") || "index";
  const isHere = (href) => href.replace(/\.html$/, "") === here;
  const badge = {
    done: "",
    wip:  ' <span class="tag wip">đang làm</span>',
    soon: ' <span class="tag soon">sắp ra</span>',
  };

  const top = document.getElementById("top");
  if (top) top.innerHTML = `
    <div class="banner">
      <a class="brand" href="index.html"><b>${SITE.name}</b><span>${SITE.tld}</span></a>
      <span class="slogan">${SITE.slogan}</span>
      <nav class="topnav">
        <a href="index.html">Trang chủ</a>
        <a href="nhat-ky.html">Nhật ký</a>
        <a href="lien-he.html">Liên hệ</a>
      </nav>
    </div>`;

  const nav = document.getElementById("nav");
  if (nav) {
    const link = (p, extra = "") =>
      `<a href="${p.href}"${isHere(p.href) ? ' class="on"' : ""}>${p.title}${extra}</a>`;
    nav.innerHTML = `
      <div class="box">
        <h4>Dự án</h4>
        ${SITE.projects.map((p) => link(p, badge[p.status] || "")).join("")}
      </div>
      <div class="box">
        <h4>Tài liệu</h4>
        ${SITE.docs.map((d) => link(d)).join("")}
      </div>
      <div class="box">
        <a href="${SITE.tiktok}" target="_blank" rel="noopener">▶ Kênh TikTok</a>
      </div>`;
  }

  const foot = document.getElementById("foot");
  if (foot) foot.innerHTML =
    `© ${new Date().getFullYear()} ${SITE.name}${SITE.tld} · ${SITE.slogan}`;

  const list = document.getElementById("project-list");
  if (list) list.innerHTML = SITE.projects.map((p) =>
    `<li><a href="${p.href}">${p.title}</a>${badge[p.status] || ""}</li>`).join("");

  document.querySelectorAll(".parts[data-parts]").forEach((box) => {
    box.innerHTML = box.dataset.parts.split(",").map((k) => SITE.parts[k.trim()]).filter(Boolean)
      .map((p) => `<figure><img src="${p.img}" alt="${p.name}" loading="lazy" width="480" height="480">
        <figcaption><b>${p.name}</b><span>${p.note}</span></figcaption></figure>`).join("");
  });

  const log = document.getElementById("log-list");
  if (log) log.innerHTML = SITE.log.map((l) =>
    `<li><time>${l.date || "—"}</time><span>${l.text}</span></li>`).join("");
})();
