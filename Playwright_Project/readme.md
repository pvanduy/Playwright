playwright-project/
│
├── tests/                          # 📂 Chứa các test case
│   ├── login.spec.ts               # ✅ Test case đăng nhập
│   ├── dashboard.spec.ts           # ✅ Test case dashboard
│   └── api/                        # ✅ (tuỳ chọn) test API
│
├── pages/                          # 📂 Page Object Model (POM)
│   ├── login-page.ts
│   ├── dashboard-page.ts
│   └── base-page.ts
│
├── fixtures/                       # 📂 Cấu hình test data, hooks, fixtures
│   └── test-fixtures.ts
│
├── utils/                          # 📂 Các hàm tiện ích (helper functions)
│   ├── env.ts                      # Load biến môi trường
│   ├── logger.ts                   # Custom log
│   └── api-client.ts               # Helper cho API test
│
├── test-data/                      # 📂 Dữ liệu test (JSON, CSV…)
│   └── users.json
│
├── playwright.config.ts            # ⚙️ Cấu hình chính của Playwright
│
├── package.json                    # 📦 Thông tin project & dependencies
│
├── playwright-report/              # 📊 Report HTML sau khi test (tự sinh)
│
├── test-results/                   # 🧪 Kết quả test (ảnh, trace, video…)
│
└── README.md                       # 📘 Tài liệu hướng dẫn dự án