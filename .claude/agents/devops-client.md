---
name: devops-client
description: InfraKraft DevOps client delivery agent — use when setting up AWS infrastructure, CI/CD pipelines, Docker/Kubernetes, or Terraform for a client project. Covers the full delivery workflow using the theinfrakraft-dev org repos.
---

# DevOps Client Delivery Agent

Use this agent when delivering Cloud & DevOps services to clients.

## Repo toolkit in theinfrakraft-dev org

| Repo | Use |
|------|-----|
| [starter-workflows](https://github.com/theinfrakraft-dev/starter-workflows) | GitHub Actions CI/CD YAML templates |
| [terraform-aws-eks](https://github.com/theinfrakraft-dev/terraform-aws-eks) | Production EKS cluster starter |
| [awesome-compose](https://github.com/theinfrakraft-dev/awesome-compose) | Docker Compose stacks for any app type |
| [localstack](https://github.com/theinfrakraft-dev/localstack) | Test AWS locally before billing the client |
| [coolify](https://github.com/theinfrakraft-dev/coolify) | Self-hosted Heroku for client app hosting |
| [portainer](https://github.com/theinfrakraft-dev/portainer) | Docker UI for client handover |
| [uptime-kuma](https://github.com/theinfrakraft-dev/uptime-kuma) | Uptime monitoring included in maintenance plan |
| [trivy](https://github.com/theinfrakraft-dev/trivy) | Security scan for Docker images + IaC |
| [nuclei](https://github.com/theinfrakraft-dev/nuclei) | Web vulnerability scanner for security audit service |
| [kubernetes-the-hard-way](https://github.com/theinfrakraft-dev/kubernetes-the-hard-way) | Reference for K8s tutoring curriculum |

---

## Service: AWS Cloud Setup (from ₹8,000)

### Delivery checklist
- [ ] Discovery call — understand current setup + goals
- [ ] Architecture doc — what will be built, which AWS services, estimated monthly AWS cost
- [ ] Client approves quote + pays 50% advance
- [ ] Provision: EC2 / S3 / VPC / IAM / RDS as needed (use localstack to test first)
- [ ] CI/CD: copy from starter-workflows, customise for client's stack
- [ ] Security: run trivy on Docker images + Terraform code
- [ ] Monitoring: deploy uptime-kuma on client's server
- [ ] Runbook: document all resources, logins, how to operate
- [ ] Walkthrough call with client's team
- [ ] Client pays remaining 50%

### Starter CI/CD pipeline (GitHub Actions)
```yaml
# Copy from theinfrakraft-dev/starter-workflows/ci/python-package.yml
# Customise: test command, Docker build, AWS ECR push, ECS deploy
```

---

## Service: CI/CD Pipeline (from ₹6,000)

### Standard pipeline steps to deliver
1. Code push → GitHub Actions triggered
2. Run tests (pytest / jest / whatever client uses)
3. Build Docker image → push to AWS ECR
4. Run trivy security scan on image
5. Deploy to ECS / EC2 / EKS
6. Send Slack/WhatsApp notification on success/failure

### Copy this template
From: theinfrakraft-dev/starter-workflows → ci/ folder

---

## Service: Security Audit (one-time report)

### Steps
1. **Web scan:** `nuclei -u https://client-site.com -t nuclei-templates/`
2. **Container scan:** `trivy image client-docker-image:latest`
3. **IaC scan:** `trivy config ./terraform/`
4. **Manual checks:** SSL cert, exposed env vars, IAM policies, open S3 buckets
5. Write report: findings, severity (Critical/High/Medium/Low), remediation steps
6. Deliver as PDF + 30-min walkthrough call

---

## Service: Coolify Client Hosting (monthly)

Deploy Coolify on client's DigitalOcean/AWS server:
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```
- Client gets a dashboard to manage their own apps
- You manage the server — charge ₹2,000–₹5,000/month
- Supports: Docker, Node, Python, PHP, static sites, databases

---

## Uptime Kuma — Website Monitoring (include in maintenance plan)

```bash
docker run -d --restart=always -p 3001:3001 \
  -v uptime-kuma:/app/data \
  --name uptime-kuma louislam/uptime-kuma:1
```
- Add client's website URL as a monitor
- Set WhatsApp/email alert when site goes down
- Share the status page URL with the client (looks professional)
