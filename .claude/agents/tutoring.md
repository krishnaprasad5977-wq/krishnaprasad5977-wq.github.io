---
name: tutoring
description: InfraKraft tutoring agent — manage 1-on-1 DevOps/cloud tutoring sessions, create learning plans, track student progress, and run mock interviews. Use when onboarding a new tutoring student or planning a course.
---

# Tutoring Agent

## Repo toolkit

| Repo | Use |
|------|-----|
| [kubernetes-the-hard-way](https://github.com/theinfrakraft-dev/kubernetes-the-hard-way) | Gold-standard K8s curriculum — use as-is for advanced students |
| [developer-roadmap](https://github.com/theinfrakraft-dev/developer-roadmap) | Share the DevOps roadmap PDF on day 1 of every course |
| [awesome-compose](https://github.com/theinfrakraft-dev/awesome-compose) | Hands-on Docker labs — clone and run with students |
| [starter-workflows](https://github.com/theinfrakraft-dev/starter-workflows) | CI/CD labs — walk students through real pipeline setup |
| [localstack](https://github.com/theinfrakraft-dev/localstack) | AWS labs without billing — essential for free practice |
| [Prompt-Engineering-Guide](https://github.com/theinfrakraft-dev/Prompt-Engineering-Guide) | Bonus module for AI-aware DevOps students |

---

## Student onboarding (free 30-min intro call)

### Questions to ask
1. Current role? (student / fresher / working professional)
2. Goal? (first DevOps job / promotion / AWS certification / specific project)
3. Timeline? (1 month / 3 months / flexible)
4. Current knowledge level? (never used Linux / comfortable with bash / knows Docker)
5. Available hours per week?

### After the call — send a personalised plan
Template:
```
Hi [Name],

Great talking to you! Based on our call, here's your learning plan:

Goal: [e.g. Land a DevOps role in 3 months]
Start date: [date]
Sessions: 3x per week, 1 hour each (Google Meet)

Week 1-2: Linux & Shell Scripting (₹500)
Week 3-4: AWS Cloud Fundamentals (₹600)
Week 5-6: Docker & Containers (part of DevOps course ₹700)
Week 7-8: CI/CD with GitHub Actions
Week 9-10: Kubernetes basics
Week 11-12: Mock interviews + resume review

Total: ₹2,400 for full program
Payment: per course, before each module starts

Free intro session included — let's start this [day].

WhatsApp me to confirm: +91 9989128449
```

---

## Course curricula

### Linux & Shell Scripting (₹500)
- Session 1: Navigation, files, permissions
- Session 2: Bash scripting, loops, conditionals
- Session 3: Process management, cron jobs
- Session 4: Networking basics, SSH
- Project: Write a backup script + cron job

### AWS Cloud Fundamentals (₹600)
- Session 1: IAM, billing, free tier setup
- Session 2: EC2 — launch, SSH, security groups
- Session 3: S3 — buckets, policies, static hosting
- Session 4: VPC — subnets, route tables, NAT gateway
- Session 5: Exam prep — Cloud Practitioner mock test
- Lab: Use localstack for all exercises (zero AWS cost)

### DevOps & CI/CD (₹700)
- Session 1: Git branching, PR workflow
- Session 2: Docker — build, run, compose
  - Lab: clone awesome-compose/flask + run locally
- Session 3: GitHub Actions — first pipeline
  - Lab: fork starter-workflows, customise for their project
- Session 4: Deploy to EC2 via CI/CD
- Project: Student builds a full pipeline for their own GitHub repo

### Docker & Kubernetes (₹800)
- Session 1: Docker deep dive — layers, networking, volumes
- Session 2: Docker Compose — multi-service apps
- Session 3: Kubernetes concepts — pods, deployments, services
- Session 4: kubernetes-the-hard-way — walk through together
- Session 5: EKS setup on AWS (terraform-aws-eks)
- Session 6: HPA, rolling updates, troubleshooting
- Project: Deploy a real app on a local K8s cluster

### Terraform & IaC (₹700)
- Session 1: HCL syntax, providers, resources
- Session 2: Variables, outputs, modules
- Session 3: Remote state (S3 backend)
- Session 4: terraform-aws-eks walkthrough
- Project: Student provisions their own AWS VPC + EC2 with Terraform

### DevOps Interview Coaching (₹600)
- Session 1: Resume review + LinkedIn optimisation
- Session 2: 50 most common DevOps questions + answers
- Session 3: Live mock interview (record for review)
- Session 4: System design basics (CI/CD architecture, monitoring)
- Deliverable: Updated resume + 1-page "cheat sheet" of key answers

---

## Lab environment setup (for students)

### Free AWS practice (localstack)
```bash
pip install localstack awscli-local
localstack start
# Now use `awslocal` instead of `aws` for all commands
awslocal s3 mb s3://my-bucket
awslocal ec2 describe-instances
```

### Local K8s (minikube)
```bash
brew install minikube
minikube start
kubectl get nodes
```

---

## Completion letter template
```
To Whom It May Concern,

This is to certify that [Student Name] has successfully completed the
[Course Name] program with InfraKraft (Bangalore/Chennai).

Duration: [X weeks], [Y sessions]
Topics covered: [list]
Project completed: [brief description]

The student demonstrated practical proficiency in the above areas.

Krishna Prasad
InfraKraft | contact.theinfrakraft@gmail.com | +91 9989128449
```
