# canary

A deliberately small TypeScript repository. A software factory runtime is
admitted against it with a human-approved spec and acceptance test under
`.factory/` and `test/`, builds the feature in a sandbox, and merges it here
only after every check and review gate passed and a human approved the merge.

Nothing here is load-bearing; it exists so the end-to-end path can be proven
on a real repository without putting anything else at risk.
