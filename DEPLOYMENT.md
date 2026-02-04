# 🚀 Vercel Deployment Guide

## Free Hosting Setup (Vercel + Neon + Vercel Blob)

---

## Step 1: GitHub එකට Push කරන්න

```bash
# Git initialize (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Quantract AI Website"

# GitHub repo එකක් create කරලා push කරන්න
git remote add origin https://github.com/YOUR_USERNAME/quantract-ai.git
git branch -M main
git push -u origin main
```

---

## Step 2: Vercel Account Create කරන්න

1. **https://vercel.com** ගිහින් **Sign Up** click කරන්න
2. **Continue with GitHub** select කරන්න
3. GitHub account එක authorize කරන්න

---

## Step 3: Project Import කරන්න

1. Vercel Dashboard එකේ **"Add New..."** → **"Project"** click කරන්න
2. GitHub repo එක select කරන්න
3. **Import** click කරන්න

---

## Step 4: Environment Variables Add කරන්න

**Project Settings** → **Environment Variables** ගිහින් මේවා add කරන්න:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `DATABASE_URL` | `postgresql://...` | Neon connection string (pooled) |
| `DIRECT_URL` | `postgresql://...` | Neon direct connection string |
| `JWT_SECRET_KEY` | `your-secret-key-here` | Random secret (min 32 chars) |
| `BLOB_READ_WRITE_TOKEN` | *(auto-generated)* | Vercel Blob token |

### 📍 Neon Database URL ගන්නේ කොහෙන්ද?

1. **https://console.neon.tech** ගියහම Dashboard එක open වෙනවා
2. Your project select කරන්න
3. **Connection Details** section එකේ connection string එක copy කරන්න
4. **Pooled connection** එක `DATABASE_URL` එකට
5. **Direct connection** එක `DIRECT_URL` එකට

### 📍 Vercel Blob Setup

1. Vercel Dashboard → **Storage** tab එකට යන්න
2. **Create Database** → **Blob** select කරන්න
3. Name එකක් දෙන්න (e.g., `quantract-files`)
4. **Create** click කරන්න
5. **Connect to Project** click කරන්න → your project select කරන්න
6. `BLOB_READ_WRITE_TOKEN` automatically add වෙනවා

---

## Step 5: Build Settings

Vercel automatically detect කරනවා Next.js project එක. Default settings OK:

- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

---

## Step 6: Deploy කරන්න

1. **Deploy** button click කරන්න
2. Build process එක wait කරන්න (2-3 minutes)
3. ✅ Deploy success!

---

## 🎉 Your URLs

Deploy වුනාට පස්සේ:

- **Website:** `https://your-project.vercel.app`
- **Admin Login:** `https://your-project.vercel.app/admin/login`
- **API:** `https://your-project.vercel.app/api/...`

---

## 📋 After Deployment Checklist

### 1. Database Migrate කරන්න (First Time Only)

Vercel deploy වෙද්දි automatic run වෙනවා. නැත්නම් local එකෙන්:

```bash
npx prisma migrate deploy
```

### 2. Admin User Create කරන්න

```bash
npm run db:seed
```

**Default Admin Credentials:**
- Email: `admin@quantract.ai`
- Password: `admin123`

⚠️ **Production එකේ password change කරන්න!**

---

## 🔧 Troubleshooting

### Build Failed?

1. **Error logs** check කරන්න Vercel Dashboard එකේ
2. Local එකේ `npm run build` run කරලා errors බලන්න

### Database Connection Error?

1. Environment variables correctly set කරලාද check කරන්න
2. Neon database active ද බලන්න
3. IP restrictions නැතිද check කරන්න

### File Upload Not Working?

1. Vercel Blob connected ද check කරන්න
2. `BLOB_READ_WRITE_TOKEN` environment variable තියෙනවද බලන්න

---

## 💰 Free Tier Limits

| Service | Free Limit |
|---------|-----------|
| **Vercel** | 100GB bandwidth/month, Unlimited deploys |
| **Neon** | 500MB storage, 190 compute hours/month |
| **Vercel Blob** | 1GB storage |

---

## 🔄 Auto-Deploy

GitHub එකට push කළ සැම වෙලාවකම Vercel automatically deploy කරනවා!

```bash
git add .
git commit -m "Your changes"
git push
```

---

## 🌐 Custom Domain (Optional)

1. Vercel Dashboard → **Domains**
2. **Add Domain** click කරන්න
3. Your domain enter කරන්න (e.g., `quantract.ai`)
4. DNS records update කරන්න (Vercel instructions දෙනවා)

---

**Need Help?** 
- Vercel Docs: https://vercel.com/docs
- Neon Docs: https://neon.tech/docs
- Next.js Docs: https://nextjs.org/docs
