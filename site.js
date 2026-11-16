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
    { href: "lingobot.html", title: "LingoBot — robot học tiếng Anh", status: "done" },
  ],

  docs: [
    { href: "so-do-v1.html", title: "Sơ đồ đấu dây V1" },
    { href: "so-do-v2.html", title: "Sơ đồ đấu dây V2" },
    { href: "so-do-v4.html", title: "Sơ đồ đấu dây V3 / V4" },
  ],

  // Nhật ký cập nhật — mới nhất để trên cùng
  log: [
    { date: "16/11/2026", text: "Đăng dự án LingoBot: chatbot học tiếng Anh ESP32-S3, màn cảm ứng 4 inch, nhạc thẻ nhớ, vỏ in 3D hộp radio và robot 50 cm." },
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
    frame: { img: "frame-f450.webp", name: "Khung F450", note: "Chữ X, trục 450mm",
      spec: "Khung chữ X, khoảng cách trục chéo 450 mm. Tay nhựa gia cố, 2 tấm đế bằng mạch in. Khung không nặng khoảng 280 g.",
      use: "Là bộ xương của drone. Tấm đế dưới có sẵn đường đồng phân phối nguồn: dây pin và dây nguồn của 4 ESC hàn thẳng lên đó, không cần mạch chia nguồn riêng.",
      tip: "Hai tay màu đỏ đánh dấu phía trước. Vít M3 nên có keo khoá ren vì rung sẽ làm lỏng. Hàn dây nguồn lên tấm đế trước rồi mới lắp tay." },
    motor: { img: "motor-2212.webp", name: "Motor DJI 2212 920KV", note: "2 thuận, 2 nghịch",
      spec: "Motor không chổi than (outrunner), stato đường kính 22 mm cao 12 mm. 920KV nghĩa là quay khoảng 920 vòng/phút cho mỗi volt khi không tải: pin 4S (14,8 V) cho khoảng 13.600 vòng/phút.",
      use: "Biến điện từ ESC thành lực nâng qua cánh quạt. Bộ 4 motor gồm 2 cái quay thuận, 2 cái quay nghịch để triệt tiêu mô-men xoắn, nhờ vậy drone không tự xoay.",
      tip: "Đai ốc đầu đen và đầu bạc có ren ngược nhau để tự siết theo chiều quay, đừng lắp lẫn. Motor quay sai chiều thì chỉ cần đảo 2 trong 3 dây nối với ESC." },
    prop: { img: "propeller.webp", name: "Cánh quạt", note: "8045 với pin 4S",
      spec: "8045 = đường kính 8 inch, bước 4,5 inch (mỗi vòng quay lý thuyết tiến 4,5 inch). Bán theo cặp thuận (CW) và nghịch (CCW).",
      use: "Tạo lực đẩy. Với pin 4S, motor 920KV quay nhanh nên dùng cánh 8 inch. Cánh 10 inch (1045) hợp với pin 3S.",
      tip: "Mặt có in chữ hướng lên trời. Cánh lắp ngược chiều sẽ đẩy xuống và drone lật ngay khi cất cánh. Cánh mẻ hoặc cong gây rung mạnh, làm nhiễu IMU: thay ngay, đừng tiếc." },
    esc: { img: "esc-45a.webp", name: "ESC LANRC 45A", note: "BLHeli_S, 2–6S",
      spec: "Bộ điều tốc cho motor không chổi than, chịu dòng liên tục 45 A, dùng pin LiPo 2–6S, firmware BLHeli_S. Mạch nhỏ, bọc sẵn tản nhiệt, 3 lỗ hàn dây motor ở đầu.",
      use: "Nhận xung PWM từ bo mạch (ở đây là 250 Hz, độ rộng 1000–2000 µs) và đảo pha 3 dây cấp cho motor để quay đúng tốc độ được yêu cầu. Cần 4 ESC, mỗi motor một cái. Dây đỏ/đen to hàn vào tấm đế nguồn của khung, dây trắng là tín hiệu, dây đen nhỏ là GND tín hiệu.",
      tip: "Hiệu chỉnh hành trình ga cho cả 4 ESC cùng lúc (đẩy ga max rồi mới cắm pin, nghe bíp thì kéo về min), nếu không 4 motor sẽ khởi động lệch nhau. Luôn tháo cánh khi hiệu chỉnh. Dây tín hiệu chỉ có trắng và đen nên ESC này không cấp 5 V cho bo: cần nguồn 5 V riêng. Nếu dùng loại ESC có dây đỏ 5 V (BEC) thì chỉ nối MỘT dây đỏ vào bo." },
    damping: { img: "damping-plate.webp", name: "Đế giảm rung", note: "Gắn bo mạch lên khung",
      spec: "Hai tấm đế nối với nhau bằng 4 bi cao su mềm.",
      use: "Cách ly bo mạch (có IMU) khỏi rung động tần số cao của motor và cánh quạt. Nhờ vậy con quay và gia tốc kế đọc ra số sạch hơn, PID không bị đánh lừa.",
      tip: "Không để dây nối bo bị căng, vì dây căng sẽ truyền rung qua thẳng và làm mất tác dụng của bi cao su. Bi cao su bị chai cứng thì thay." },
    tx: { img: "fs-i6.webp", name: "Tay FlySky FS-i6", note: "2.4GHz",
      spec: "Tay điều khiển 2,4 GHz, giao thức AFHDS 2A, mặc định 6 kênh (nạp firmware mở khoá lên 10 kênh), chạy 4 pin AA.",
      use: "Người lái gửi lệnh ga, nghiêng, xoay và các công tắc chế độ bay qua sóng tới bộ thu. Dùng cho bản V1.",
      tip: "Phát được AFHDS 2A nhưng không phát được ELRS, vì vậy từ bản V2 chuyển sang tay RadioMaster Pocket. Luôn bật tay điều khiển trước rồi mới cắm pin drone." },
    ia6b: { img: "fs-ia6b.webp", name: "Bộ thu FS-iA6B", note: "PPM 8 kênh",
      spec: "Bộ thu AFHDS 2A, có các ngõ ra PWM 6 kênh, PPM và i-BUS. Nguồn 4–6,5 V.",
      use: "Nhận sóng từ tay FS-i6 và gộp 8 kênh thành 1 dây PPM về bo mạch. Chỉ cần 3 dây: tín hiệu, 5 V, GND.",
      tip: "Ghép đôi (bind): cắm jumper vào cổng B/VCC rồi cấp nguồn, giữ nút BIND trên tay khi bật. Phải bật xuất PPM trong menu của tay." },
    icm: { img: "icm20602.webp", name: "ICM-20602", note: "Gyro + gia tốc, SPI, 3.3V",
      spec: "Cảm biến quán tính 6 trục: con quay ±2000 °/s, gia tốc kế ±16 g, giao tiếp SPI, nguồn 3,3 V.",
      use: "Là “tai trong” của drone. Con quay cho biết tốc độ nghiêng, gia tốc kế cho biết hướng trọng lực. Bộ lọc Kalman trộn hai nguồn này để ra góc nghiêng cho PID.",
      tip: "Chỉ chịu 3,3 V, cấp 5 V là cháy. Đặt gần tâm khung và đúng chiều mũi tên trên bo. Hiệu chỉnh khi đặt máy nằm phẳng tuyệt đối." },
    bmp: { img: "bmp388.webp", name: "BMP388", note: "Áp suất, SPI — che mút",
      spec: "Cảm biến áp suất khí quyển, độ chính xác tương đối khoảng ±0,08 hPa (cỡ ±0,7 m), giao tiếp SPI, nguồn 3,3 V.",
      use: "Áp suất giảm khi lên cao. Sau khi lọc, độ cao tương đối được dùng cho chế độ giữ độ cao (từ bản V2).",
      tip: "Phải che bằng một miếng mút xốp: gió cánh quạt và ánh sáng chiếu trực tiếp làm số nhảy vài mét. Đừng bịt kín hoàn toàn." },
    gps: { img: "gps-m10.webp", name: "GPS GEP-M10", note: "u-blox M10, UART",
      spec: "Module GPS chip u-blox M10, thu nhiều hệ vệ tinh (GPS, Galileo, GLONASS, BeiDou), giao tiếp UART, gói tin UBX-NAV-PVT.",
      use: "Cho vị trí, vận tốc và số vệ tinh. Từ bản V3 dùng để giữ vị trí ngoài trời.",
      tip: "Cần trời thoáng; lần bật đầu có thể mất vài phút mới bắt đủ vệ tinh. Đặt trên cột, xa dây nguồn và bộ thu sóng. Chưa đủ vệ tinh thì đừng bật giữ vị trí." },
    mag: { img: "ist8310.webp", name: "La bàn IST8310", note: "I2C, chân 3V3",
      spec: "Cảm biến từ trường 3 trục, giao tiếp I2C, nguồn 3,3 V.",
      use: "Cho hướng mũi so với phương Bắc, dùng để giữ hướng mũi và để GPS biết phải bay về hướng nào.",
      tip: "Dòng điện lớn trong dây pin tạo từ trường làm lệch la bàn, nên đặt la bàn trên cột cùng GPS. Hiệu chuẩn lại mỗi khi đổi vị trí gắn hoặc đi lại dây nguồn." },
    pocket: { img: "radiomaster-pocket.webp", name: "Tay RadioMaster Pocket", note: "ELRS 2.4GHz, EdgeTX",
      spec: "Tay điều khiển nhỏ gọn, mạch phát ExpressLRS 2,4 GHz tích hợp, chạy hệ điều hành EdgeTX, có màn hình.",
      use: "Thay FS-i6 từ bản V2. Ngoài gửi lệnh, tay còn nhận telemetry: điện áp pin, độ cao, số vệ tinh, chế độ bay hiển thị ngay trên màn hình.",
      tip: "Đặt bind phrase giống nhau ở tay và bộ thu để tự ghép đôi. Cập nhật tay và bộ thu cùng một phiên bản ELRS chính." },
    elrs: { img: "elrs-rx.webp", name: "Bộ thu ELRS 2400RX", note: "Đặt 2 chân sang CRSF",
      spec: "Bộ thu ExpressLRS 2,4 GHz, có các chân PWM, có thể chuyển 2 chân sang chế độ nối tiếp CRSF.",
      use: "Nhận lệnh từ tay Pocket qua giao thức CRSF (1 cặp TX/RX về bo) và gửi telemetry ngược lại về tay.",
      tip: "Phải vào trang web cấu hình của bộ thu để đổi 2 chân sang CRSF, nếu không bo sẽ không đọc được gì. TX của bộ thu nối chéo vào RX của bo." },
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

  // Mỗi linh kiện một khối: ảnh bên trái, thông số / công dụng / lưu ý bên phải
  document.querySelectorAll(".parts[data-parts]").forEach((box) => {
    box.className = "part-list";
    box.innerHTML = box.dataset.parts.split(",").map((k) => SITE.parts[k.trim()]).filter(Boolean)
      .map((p) => `<div class="part">
        <img src="${p.img}" alt="${p.name}" loading="lazy" width="480" height="480">
        <div>
          <h3>${p.name}</h3>
          <p class="pnote">${p.note}</p>
          ${p.spec ? `<p><b>Thông số:</b> ${p.spec}</p>` : ""}
          ${p.use ? `<p><b>Công dụng:</b> ${p.use}</p>` : ""}
          ${p.tip ? `<p class="ptip"><b>Lưu ý:</b> ${p.tip}</p>` : ""}
        </div>
      </div>`).join("");
  });

  const log = document.getElementById("log-list");
  if (log) log.innerHTML = SITE.log.map((l) =>
    `<li><time>${l.date || "—"}</time><span>${l.text}</span></li>`).join("");
})();
