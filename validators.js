// Small input validation helpers for the login form

function isValidUsername(name) {
  if (typeof name !== "string") return false;
  const trimmed = name.trim();
  return trimmed.length >= 3 && trimmed.length <= 50;
}

function passwordStrength(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
}

function strengthLabel(score) {
  if (score <= 1) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

function formatDisplayName(first, last) {
  if (!first && !last) return "Anonymous";
  return [first, last].filter(Boolean).join(" ");
}

// Quick client-side hint only, never a substitute for server-side protection
function isSuspiciousInput(value) {
  return /('|--|;|\bOR\b\s+\d+=\d+)/i.test(value);
}

module.exports = {
  isValidUsername,
  passwordStrength,
  strengthLabel,
  formatDisplayName,
  isSuspiciousInput,
};
