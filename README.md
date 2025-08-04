# Dekamond Assignment - Authentication System

یک سیستم احراز هویت ساده با Next.js، TypeScript و SCSS Modules

## 🎯 ویژگی‌ها

- ✅ صفحه ورود با اعتبارسنجی شماره تلفن ایران
- ✅ صفحه داشبورد با نمایش اطلاعات کاربر
- ✅ طراحی Responsive
- ✅ کامپوننت‌های قابل استفاده مجدد (Input و Button)
- ✅ مدیریت state با Context API
- ✅ اعتبارسنجی فرم با سیستم مرکزی
- ✅ ذخیره‌سازی اطلاعات در localStorage
- ✅ ریدایرکت خودکار بر اساس وضعیت احراز هویت

## 🛠 تکنولوژی‌های استفاده شده

- **Next.js 14** (App Router)
- **TypeScript**
- **SCSS Modules** با Nesting
- **React Context API**
- **Responsive Design**

## 📁 ساختار پروژه

```
src/
├── app/
│   ├── auth/
│   │   ├── page.tsx
│   │   └── page.module.scss
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── page.module.scss
│   ├── globals.scss
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   └── Button.module.scss
│       └── Input/
│           ├── Input.tsx
│           └── Input.module.scss
├── contexts/
│   └── AuthContext.tsx
├── services/
│   └── api.ts
├── types/
│   └── auth.ts
└── utils/
    └── validation.ts
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- npm یا yarn یا pnpm

### مراحل نصب

1. **کلون کردن پروژه**

```bash
git clone <repository-url>
cd dekamond-assignment
```

2. **نصب وابستگی‌ها**

```bash
npm install
```

3. **اجرای پروژه در حالت توسعه**

```bash
npm run dev
```

4. **باز کردن مرورگر**

```
http://localhost:3000
```

## 📋 مسیرهای موجود

- `/` - صفحه اصلی (ریدایرکت به `/auth`)
- `/auth` - صفحه ورود
- `/dashboard` - صفحه داشبورد (نیاز به احراز هویت)

## 🔧 ویژگی‌های فنی

### اعتبارسنجی شماره تلفن

- پشتیبانی از فرمت‌های مختلف شماره تلفن ایران
- اعتبارسنجی real-time
- نمایش پیام‌های خطا به فارسی

### کامپوننت‌های UI

- **Input**: کامپوننت ورودی با پشتیبانی از label، error و helper text
- **Button**: کامپوننت دکمه با حالت‌های مختلف و loading state

### فونت و طراحی

- **YekanBakh**: استفاده از فونت یکان‌بخش برای تمام متن‌ها
- **CSS Variables**: مدیریت متمرکز فونت‌ها با CSS Custom Properties
- **Responsive Typography**: سایزهای فونت متناسب با سایز صفحه

### مدیریت State

- استفاده از React Context برای مدیریت وضعیت احراز هویت
- ذخیره‌سازی اطلاعات در localStorage
- ریدایرکت خودکار بر اساس وضعیت کاربر

### API Integration

- استفاده از Random User API برای دریافت اطلاعات کاربر
- مدیریت خطاها و loading states

## 🎨 طراحی و UI/UX

### ویژگی‌های طراحی

- طراحی Responsive برای تمام سایزهای صفحه
- استفاده از SCSS Modules برای استایل‌دهی
- انیمیشن‌های نرم و جذاب
- رنگ‌بندی مدرن و حرفه‌ای

### کامپوننت‌های قابل استفاده مجدد

- سیستم طراحی یکپارچه
- پشتیبانی از تم‌های مختلف
- قابلیت شخصی‌سازی آسان

## 🔒 امنیت

- اعتبارسنجی سمت کلاینت
- محافظت از مسیرهای حساس
- مدیریت session با localStorage

## 📱 Responsive Design

- پشتیبانی کامل از موبایل
- طراحی Adaptive برای تبلت
- بهینه‌سازی برای دسکتاپ

## 🧪 تست

برای اجرای تست‌ها:

```bash
npm run test
```

## 📦 Build

برای ساخت نسخه production:

```bash
npm run build
npm start
```
