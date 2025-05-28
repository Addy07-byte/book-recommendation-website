📚**Book Recommendation Website**

A personal project that blends my passion for books with hands-on cloud engineering skills.  
This static website is built with **HTML/CSS**, hosted on **AWS S3**, delivered securely via **CloudFront**, and deployed automatically using **GitHub Actions CI/CD** — all within the AWS Free Tier.

🔗 **Live Site**: [https://d3kwau84gyqo5s.cloudfront.net](https://d3kwau84gyqo5s.cloudfront.net)  
💻 **GitHub Repo**: [https://github.com/Addy07-byte/book-recommendation-site](https://github.com/Addy07-byte/book-recommendation-website)

---

## ✨ Project Highlights

- 🔐 HTTPS-enabled hosting using **Amazon CloudFront + S3**
- 🔁 **Automated deployments** via GitHub Actions
- 🧠 Troubleshooting real AWS issues (AccessDenied, caching, path errors)
- 📱 Responsive front-end built with HTML/CSS
- 📦 Fully **serverless + free-tier** architecture

---

## ⚙️ Tech Stack

| Tool               | Purpose                                |
|--------------------|----------------------------------------|
| `Amazon S3`         | Static website hosting                |
| `CloudFront`        | CDN + HTTPS delivery                  |
| `GitHub Actions`    | CI/CD for auto-deployments            |
| `IAM + OAC`         | Secure CloudFront access to S3        |
| `HTML/CSS`          | Frontend design and styling           |

---

## 🚀 Deployment Pipeline

1. Developer pushes to `main` branch
2. GitHub Actions syncs updated files to **Amazon S3**
3. CloudFront cache is **automatically invalidated**
4. Changes appear live in seconds at the CloudFront URL

---

## 🛠️ Key Learnings & Fixes

| Problem | Root Cause | Fix |
|--------|-------------|-----|
| `AccessDenied` from CloudFront | OAC not set or misconfigured | Created and attached Origin Access Control (OAC) |
| Styles/images not loading | Wrong file paths | Updated relative paths and moved files to S3 root |
| Website worked on laptop, not mobile | Edge/browsing cache conflict | Performed CloudFront `/*` invalidation |
| Root domain didn't load site | No default root object | Set `index.html` as CloudFront default root object |
| `AccessDenied` after invalidation | Origin path misconfigured | Removed `/index.html` from CloudFront origin path |

---

## 📂 Project Structure

📁 root/
├── index.html
├── about.html
├── book-list.html
├── style.css
├── *.jpg (book covers)
├── Resume.pdf
└── .github/
└── workflows/
└── deploy.yml

---

---

## 🔄 GitHub Actions Workflow

```yaml
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ secrets.AWS_REGION }}
    - run: aws s3 sync . s3://${{ secrets.AWS_S3_BUCKET }} --delete
    - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```
----

🙋‍♂️ **About the Creator** 

I'm an IT graduate with a growing passion for cloud engineering and DevOps.
I built this project to apply my skills in a practical way and share my personal reading journey.

📎 LinkedIn : https://www.linkedin.com/in/aditya-hede-1971211aa/
📁 Portfolio : https://www-adityhede.com/

🧠 **Next Steps**

Add book search functionality using JavaScript

Connect to a backend API (e.g., Goodreads or Google Books)

Add analytics to track visitor engagement

📫 **Let’s Connect**

I'm actively seeking entry-level roles in:

Cloud/DevOps Engineering

Solutions Architecture

Technical Consulting

Open to collaboration, feedback, and freelance opportunities!
