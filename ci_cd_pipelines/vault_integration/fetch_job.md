## 🔧 GitLab CI Template: `ci/fetch_vault_secrets.yml`

This reusable job securely retrieves secrets from HashiCorp Vault using GitLab's
OIDC `id_token` and Vault’s JWT authentication method.

### 🧩 What the job does (step by step)

1. **Requests an OIDC ID Token from GitLab**
   ```yaml
   id_tokens:
     VAULT_ID_TOKEN:
       aud: vault

GitLab issues a signed JWT (VAULT_ID_TOKEN) with audience vault.

2. **Hardens execution and sets Vault address**

```bash
set -euo pipefail
export VAULT_ADDR="${VAULT_ADDR:-http://vault:8200}"
```
Ensures strict error handling and a default Vault URL.

3. **Installs `jq` locally**
```bash
JQ_DIR="${CI_PROJECT_DIR}/.bin"
```
The job downloads jq into the repository so it works even on runners that do not have jq installed.


