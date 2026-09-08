---
name: security-audit
description: InfraKraft security audit agent — deliver the Security Audit service using Nuclei and Trivy. Use when scoping, running, or writing up a security audit for a client's website, app, or cloud infrastructure.
---

# Security Audit Agent

## Repo toolkit

| Repo | Use |
|------|-----|
| [nuclei](https://github.com/theinfrakraft-dev/nuclei) | Web + API vulnerability scanner |
| [trivy](https://github.com/theinfrakraft-dev/trivy) | Docker image + IaC security scanner |

---

## Service scope (₹5,000–₹15,000 one-time)

| Audit type | What's covered | Price |
|-----------|----------------|-------|
| Website audit | OWASP top 10, SSL, exposed secrets, headers | ₹5,000 |
| Cloud audit | AWS IAM, S3 bucket policies, security groups | ₹8,000 |
| Full audit | Website + cloud + Docker images + CI/CD | ₹15,000 |

---

## Website audit — Nuclei

### Install
```bash
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
# Or: brew install nuclei
nuclei -update-templates
```

### Run against client site
```bash
# Full scan
nuclei -u https://client-site.com -t nuclei-templates/

# Specific categories
nuclei -u https://client-site.com -t nuclei-templates/http/cves/
nuclei -u https://client-site.com -t nuclei-templates/http/misconfiguration/
nuclei -u https://client-site.com -t nuclei-templates/http/exposures/

# Save report
nuclei -u https://client-site.com -o nuclei-report.txt -markdown-export nuclei-report/
```

### Manual checklist (do alongside Nuclei)
- [ ] SSL cert valid + not expiring within 30 days
- [ ] Security headers present (X-Frame-Options, CSP, HSTS)
- [ ] No sensitive files exposed (.env, .git, backup files)
- [ ] Login page has rate limiting / CAPTCHA
- [ ] No default admin credentials (admin/admin)
- [ ] Contact form has bot protection
- [ ] No outdated JS libraries with known CVEs

---

## Container audit — Trivy

### Install
```bash
brew install trivy
# Or: docker pull aquasec/trivy
```

### Scan Docker image
```bash
trivy image client-app:latest
trivy image --severity HIGH,CRITICAL client-app:latest
trivy image --format json -o trivy-report.json client-app:latest
```

### Scan Terraform / IaC
```bash
trivy config ./terraform/
trivy config ./kubernetes/
trivy config --severity HIGH,CRITICAL ./terraform/
```

### Scan Git repo for secrets
```bash
trivy fs --security-checks secret ./client-repo/
```

---

## AWS cloud audit checklist

Run in client's AWS account (read-only IAM role):
- [ ] IAM: no root access keys active
- [ ] IAM: MFA enabled on all users
- [ ] IAM: no wildcard `*` policies attached to users
- [ ] S3: no public buckets (unless intentional)
- [ ] S3: versioning enabled on critical buckets
- [ ] EC2: no SSH (port 22) open to 0.0.0.0/0
- [ ] EC2: all instances in private subnet where possible
- [ ] RDS: not publicly accessible
- [ ] CloudTrail: enabled in all regions
- [ ] GuardDuty: enabled

```bash
# Quick CLI checks
aws iam get-account-summary
aws s3api list-buckets --query 'Buckets[].Name'
aws ec2 describe-security-groups --query 'SecurityGroups[?IpPermissions[?IpRanges[?CidrIp==`0.0.0.0/0`]]]'
```

---

## Report template

```markdown
# Security Audit Report — [Client Name]
Date: [date]
Auditor: Krishna Prasad, InfraKraft

## Executive Summary
[2-3 sentences: overall posture, most critical findings]

## Findings

### CRITICAL
| # | Finding | Location | Remediation |
|---|---------|----------|-------------|
| 1 | [e.g. SQL injection in /search] | search.php:42 | Use parameterised queries |

### HIGH
...

### MEDIUM
...

### LOW / INFORMATIONAL
...

## Remediation Priority
1. Fix CRITICAL issues within 24 hours
2. Fix HIGH issues within 1 week
3. Schedule MEDIUM issues in next sprint

## Tools Used
- Nuclei v3 (web vulnerabilities)
- Trivy v0.x (container + IaC)
- Manual review

## Contact
Krishna Prasad | InfraKraft
contact.theinfrakraft@gmail.com | +91 9989128449
```
