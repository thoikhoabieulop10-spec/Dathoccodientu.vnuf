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

  // Nhật ký — mới nhất để trên cùng.
  // project: "chatbot" | "drone" | "web". details: các ý chi tiết (có thể bỏ trống).
  log: [
    { date: "16/11/2026", project: "chatbot", title: "Đổi tên thành LingoBot, xoay ngang màn hình, đăng lên web",
      details: [
        "Đổi tên chatbot từ “Như Ý” thành <b>LingoBot</b> (khẩu hiệu: Robot đồng hành khám phá ngôn ngữ), sửa tên trên màn hình, trong vai trò AI và thư viện truyện.",
        "Làm giao diện ngang 480×320 cho bản robot: thanh nút nằm dưới đáy (NÓI, TO, NHỎ, HOME, PAUSE, RESET), khung chat có cột avatar bên trái.",
        "Thêm công tắc <code>LINGOBOT_FLIP_180</code> để lật màn 180° nếu lắp ngược.",
        "Đăng trang dự án LingoBot cùng firmware, file in 3D và thư viện truyện.",
      ] },
    { date: "16/11/2026", project: "web", title: "Thêm ESC và chi tiết từng linh kiện cho các trang drone",
      details: [
        "Thêm ESC LANRC 45A (BLHeli_S, 2–6S) vào phần linh kiện V1–V4.",
        "Mỗi linh kiện có ảnh riêng kèm thông số, công dụng và lưu ý khi lắp.",
      ] },
    { date: "15/11/2026", project: "chatbot", title: "Hoàn thành hộp radio, thu nhỏ robot còn 50 cm",
      details: [
        "In xong và lắp hoàn chỉnh vỏ kiểu đài radio (PETG).",
        "Thu nhỏ robot từ 60 cm xuống 50 cm, màn hình đặt nằm ngang làm khuôn mặt. Phần lắp màn, loa và lỗ USB giữ đúng kích thước thật.",
        "Robot vẫn chia 15 mảnh, mảnh lớn nhất 109×109×195 mm để vừa máy in 260×260×300 mm.",
      ] },
    { date: "14/11/2026", project: "chatbot", title: "Viết báo cáo KHKT và hướng dẫn sử dụng",
      details: [
        "Viết lại báo cáo nghiên cứu còn khoảng 20 trang, phần mô hình là hộp radio.",
        "Tính chi phí thật: ESP32-S3 167k, màn hình 400k, thẻ nhớ 200k, nhựa 130k; tổng khoảng 1,09 triệu đồng.",
        "Viết bản hướng dẫn sử dụng cho người dùng.",
      ] },
    { date: "13/11/2026", project: "chatbot", title: "Thiết kế robot 60 cm, học dùng máy in 3D",
      details: [
        "Vẽ robot cao 60 cm chia 15 mảnh, ghép bằng chốt sợi nhựa và keo.",
        "Làm quen máy in Creality Hi Combo và Orca Slicer: nhân bản chi tiết, lật chi tiết, gửi file qua mạng.",
        "Lỗi gửi file HTTP 404: phải chọn kiểu máy chủ là <b>CrealityPrint</b> thay vì Octo/Klipper.",
        "Máy hủy lệnh in vì file cắt lớp cho PLA trong khi máy khai báo PETG. Cắt lại bằng hồ sơ Creality Generic PETG thì in được.",
      ] },
    { date: "12/11/2026", project: "chatbot", title: "Nút Đổi WiFi và vỏ hộp kiểu đài radio",
      details: [
        "Thêm nút “Đổi WiFi” ngay trên màn hình chính để đưa máy về chế độ cài mạng, không cần nạp lại firmware.",
        "Thiết kế vỏ in 3D kiểu đài radio 200×140×72 mm. Bản đầu khung màn hình nhỏ hơn màn thật và chỉ có mặt trước, nên đã sửa lại khung và thêm nắp sau, núm vặn.",
      ] },
    { date: "11/11/2026", project: "chatbot", title: "Màn cảm ứng, giao diện mới, thư viện truyện và nhạc thẻ nhớ",
      details: [
        "Viết driver cảm ứng XPT2046 để chạm màn hình thay cho nút BOOT, có bước hiệu chỉnh 3 điểm lưu vào bộ nhớ.",
        "Giao diện mới: cột nút bên trái (Nói, To, Nhỏ, Reset) và hình bạn học sinh. Màn hình chính là khuôn mặt, chạm vào thì hiện menu Kể chuyện / Học / Nghe nhạc / Trở về.",
        "Lỗi chữ “Lala School” tự hiện lên khi không ai nói (nhận dạng giọng nói đoán nhầm tiếng ồn): lọc ngay trên máy và thêm luật trong vai trò AI.",
        "Làm thư viện 20 truyện ngắn và 20 bài hát tiếng Anh, tải lên Knowledge Base.",
        "Nút Nghe nhạc bị AI hiểu thành kể chuyện: viết lại câu lệnh và đổi sang model Qwen.",
        "Phát nhạc MP3 từ thẻ nhớ bằng giọng nói. Lỗi thẻ ESP_ERR_TIMEOUT do dây, sửa dây thì nhận thẻ.",
        "Thêm nút HOME và PAUSE. Sửa lỗi “không tìm thấy bài” khi chỉ nói “phát một bài nhạc tiếng Anh”: giờ máy sẽ phát ngẫu nhiên.",
      ] },
    { date: "10/11/2026", project: "chatbot", title: "Chuyển sang firmware xiaozhi",
      details: [
        "Thử riêng micro và loa bằng sketch kiểm tra âm thanh, đặt nhân vật trợ lý là một nữ sinh tên Như Ý.",
        "Chuyển từ bản Arduino sang firmware mã nguồn mở xiaozhi-esp32, build bằng GitHub Actions và nạp bằng ESP Tool trên trình duyệt.",
        "Màn hình trắng, không hiện chữ: sửa cấu hình màn ST7796 320×480.",
        "Không nghe được giọng nói: thay micro INMP441 thì chạy. Cài tiếng Việt, giọng nữ trên xiaozhi.me.",
      ] },
    { date: "09/11/2026", project: "chatbot", title: "Viết báo cáo nghiên cứu bản đầu",
      details: [
        "Tìm hiểu ESP32-S3, mô hình ngôn ngữ lớn, nhận dạng và tổng hợp giọng nói; viết báo cáo nghiên cứu sản phẩm bản đầu tiên.",
      ] },
    { date: "06/11/2026", project: "chatbot", title: "Bắt đầu dự án chatbot học tiếng Anh",
      details: [
        "Linh kiện: ESP32-S3 N16R8, màn hình 4 inch ST7796 có cảm ứng và khe thẻ nhớ, micro INMP441, ampli MAX98357A và loa.",
        "Bản đầu viết bằng Arduino, gọi thẳng Gemini API để nghe, hiểu và trả lời.",
        "Bản này phải tự lo phần chuyển giọng nói thành chữ và chữ thành giọng nói, phản hồi chậm. Đó là lý do sau này chuyển sang xiaozhi.",
      ] },
    { date: "29/10/2026", project: "drone", title: "Đăng bản V4 — GPS hoàn thiện",
      details: [
        "Đọc GPS bằng gói nhị phân UBX-NAV-PVT thay cho NMEA, có vận tốc Bắc/Đông kể cả khi gần đứng yên.",
        "Điều kiện GPS tốt tính bằng sai số ngang hAcc &lt; 2,5 m thay cho HDOP.",
        "Giữ độ cao kéo về đúng mốc lúc bật, cần ga chỉnh độ cao có vùng chết.",
        "Giữ vị trí đủ 3 bước: hãm, chống gió, kéo về điểm cũ; giới hạn nghiêng 12°.",
        "Hiệu chuẩn lại la bàn đủ ma trận. Bộ trộn motor ưu tiên roll/pitch để yaw không chiếm chỗ.",
        "Thêm 2 sketch kiểm tra: F405_drone_test và F405_IST8310_M10_test.",
        "Bài học: bộ số giữ vị trí 0.5/0.05 quá lớn, nhiễu GPS 10 cm/s đã làm drone nghiêng 5° và giật liên tục.",
      ] },
    { date: "29/10/2026", project: "drone", title: "Đăng bản V3 — GPS + la bàn",
      details: [
        "Thêm GPS GEP-M10 (u-blox M10) và la bàn IST8310 để giữ vị trí ngoài trời và giữ hướng mũi.",
        "Công tắc kênh 7 có 3 nấc STAB / ALT / POS. Thêm đèn báo GPS ở PB5.",
        "Telemetry về tay cầm thêm toạ độ, số vệ tinh, tốc độ GPS.",
        "Hệ số giữ vị trí để ở mức an toàn, chưa tune xong (hoàn thiện ở V4).",
      ] },
    { date: "29/10/2026", project: "web", title: "Chuyển trang sang Vercel", details: [] },
    { date: "", project: "drone", title: "Đăng bản V2 — giữ độ cao",
      details: [
        "Thêm cảm biến áp suất BMP388 (che mút) để giữ độ cao bằng công tắc.",
        "Đổi bộ thu sang ExpressLRS (CRSF) và tay RadioMaster Pocket: góc, độ cao, chế độ bay hiện ngay trên tay cầm.",
        "Kênh 5 dùng để ARM, kênh 7 chọn chế độ bay.",
        "Drone vẫn trôi ngang theo gió.",
      ] },
    { date: "", project: "drone", title: "Đăng bản V1 — tự cân bằng",
      details: [
        "Tự thiết kế bo mạch điều khiển bay STM32F405 + ICM-20602, firmware tự viết trên STM32duino.",
        "Bộ lọc Kalman trộn con quay và gia tốc kế; PID tầng góc → tốc độ quay → bộ trộn 4 motor; lọc rung biquad 60 Hz.",
        "Tay FS-i6 + bộ thu FS-iA6B qua 1 dây PPM; gửi số liệu qua Bluetooth DL-20 để tune PID trên web.",
        "Giữ được thăng bằng, nhưng độ cao do tay ga, buông ga là tụt.",
      ] },
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
  if (log) {
    const names = { chatbot: "Chatbot LingoBot", drone: "Drone", web: "Trang web" };
    const draw = (f) => {
      log.innerHTML = SITE.log.filter((l) => f === "all" || l.project === f).map((l) => `<li>
        <time>${l.date || "—"}</time>
        <div><span class="tag proj-${l.project || "web"}">${names[l.project] || "Trang web"}</span>
          <b>${l.title || l.text}</b>
          ${l.details && l.details.length ? `<ul>${l.details.map((d) => `<li>${d}</li>`).join("")}</ul>` : ""}
        </div></li>`).join("");
    };
    const bar = document.getElementById("log-filter");
    if (bar) {
      bar.innerHTML = [["all", "Tất cả"], ["chatbot", "Chatbot LingoBot"], ["drone", "Drone"]]
        .map(([k, t]) => `<button data-f="${k}"${k === "all" ? ' class="on"' : ""}>${t}</button>`).join("");
      bar.onclick = (e) => {
        const k = e.target.dataset && e.target.dataset.f; if (!k) return;
        bar.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b === e.target));
        draw(k);
      };
    }
    draw(location.hash === "#drone" ? "drone" : location.hash === "#chatbot" ? "chatbot" : "all");
    if (bar && location.hash) bar.querySelectorAll("button").forEach((b) => b.classList.toggle("on", "#" + b.dataset.f === location.hash));
  }
})();
