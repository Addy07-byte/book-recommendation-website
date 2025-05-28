📚 Book Recommendation Website
A static website built to share my personal book recommendations — hosted entirely on AWS Free Tier using Amazon S3, CloudFront, and GitHub Actions for automated deployment.

🔗 Live Site
👉 https://d3kwau84gyqo5s.cloudfront.net

✨ Features
🛠 Built with HTML, CSS, and a love for reading

☁️ Hosted on Amazon S3 with secure HTTPS delivery via CloudFront

🔁 Automatically deployed via GitHub Actions CI/CD pipeline

🔐 Configured with Origin Access Control (OAC) and private S3 bucket

⚡ Fast global delivery with CloudFront caching and cache invalidation

🚀 Tech Stack
Tool	Purpose
S3	Static site hosting
CloudFront	CDN + HTTPS
GitHub Actions	CI/CD pipeline
IAM	Access control and deployment security
HTML/CSS	Frontend design

🛠️ CI/CD Workflow
Push to main branch

GitHub Actions:

Syncs files to S3

Invalidates CloudFront cache for instant updates

CloudFront delivers the latest secure version globally

🧩 Troubleshooting Journey
This project helped me troubleshoot and understand several real-world AWS issues:

Issue	Fix
AccessDenied on CloudFront	Attached OAC & updated bucket policy
Assets not loading	Fixed relative paths & file locations
Inconsistent display across browsers	Invalidation + cache-busting
Default homepage broken	Set index.html as default root object
CloudFront error after invalidation	Removed incorrect origin path (/index.html)


📂 Folder Structure
.
├── index.html
├── about.html
├── book-list.html
├── style.css
├── *.jpg (book covers)
├── Resume.pdf
└── .github/workflows/deploy.yml
🙋‍♂️ About Me
I'm passionate about books, cloud computing, and building real projects that bring the two together.
📌 LinkedIn (https://www.linkedin.com/in/aditya-hede-1971211aa/)
📁 Portfolio (https://www-adityhede.com/)

📫 Contact
Open to feedback, collaborations, and opportunities in:

🌩 Cloud Engineering

🔧 DevOps

🛡️ Solutions Architecture
