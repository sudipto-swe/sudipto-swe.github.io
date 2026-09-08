# 🎓 GitHub Pages Deployment Guide for Sudipto Biswas's Portfolio

এই প্রজেক্টটি আপনার **US CS Ph.D. Applications**-এর জন্য সম্পূর্ণভাবে প্রস্তুত এবং **GitHub Pages**-এ ফ্রী-তে হোস্ট করার জন্য কনফিগার করা হয়েছে।

---

## 🚀 উপায় ১: Command Line দিয়ে ১-ক্লিকে ডিপ্লয় (সবচেয়ে সহজ)

১. আপনার টার্মিনালে এই প্রজেক্ট ফোল্ডারে আসুন:
```bash
cd /home/suuu/A1/Portfolio
```

২. আপনার **GitHub** একাউন্টে একটি নতুন পাবলিক রিপ্রোজিটরি (Repository) তৈরি করুন:
   - নাম দিন: `sudipto-swe.github.io` (অথবা `portfolio`)

৩. আপনার টার্মিনালে নিচের কমান্ডগুলো চালান:
```bash
git init
git add .
git commit -m "Initial commit of US PhD Academic Portfolio website"
git branch -M main
git remote add origin https://github.com/sudipto-swe/sudipto-swe.github.io.git
git push -u origin main
```

৪. ওয়েবসাইটটি লাইভ ডিপ্লয় করতে এই ১টি কমান্ড লিখুন:
```bash
npm run deploy
```

> 🎯 **ফলাফল:** `npm run deploy` অটোমেটিক কোড বিল্ড করবে এবং `gh-pages` ব্রাঞ্চ তৈরি করে আপলোড করে দেবে। ২-৩ মিনিটের মধ্যে আপনার পোর্টফোলিও লাইভ দেখা যাবে এই লিংকে:
> **https://sudipto-swe.github.io**

---

## ⚙️ উপায় ২: GitHub Actions (Auto-Deploy on Push)

প্রজেক্টে `.github/workflows/deploy.yml` ফাইল যোগ করা আছে। আপনি `main` ব্রাঞ্চে যেকোনো চেঞ্জ `git push origin main` করলেই GitHub Actions অটোমেটিক ওয়েবসাইট আপডেট করে দেবে।

### GitHub Repository Settings-এ ১টি ছোট কাজ (শুধু প্রথমবার):
1. GitHub-এ আপনার repository-তে যান।
2. **Settings** -> **Pages** এ যান।
3. **Build and deployment** সেকশনে **Source** ডেক্সটপ মেনু থেকে **Deploy from a branch** নির্বাচন করুন।
4. **Branch** হিসেবে `gh-pages` এবং `/ (root)` সিলেক্ট করে **Save** দিন।

---

## 🛠️ লোকালি টেস্ট করা (Local Development)

ওয়েবসাইটটি নিজের কম্পিউটারে টেস্ট বা পরিবর্তন করে দেখতে চালান:
```bash
npm run dev
```
এটি লোকাল লাইভ ডেভেলপমেন্ট সার্ভার চালু করবে (`http://localhost:5173`)।

বিল্ড টেস্ট করতে চালান:
```bash
npm run build
```

---

*Made with ❤️ for Sudipto Biswas's CS Ph.D. Journey in the USA!*
