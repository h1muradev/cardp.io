interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = (pwd: string): { strength: number; label: string; color: string } => {
    if (!pwd) return { strength: 0, label: '', color: '#E2E8F0' };

    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

    if (strength <= 2) return { strength: 1, label: 'Fraca', color: '#DC2626' };
    if (strength <= 3) return { strength: 2, label: 'Média', color: '#F59E0B' };
    return { strength: 3, label: 'Forte', color: '#16A34A' };
  };

  const { strength, label, color } = getStrength(password);

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-2 mb-1">
        <div className={`h-1.5 flex-1 rounded-full transition-colors ${strength >= 1 ? '' : 'bg-[#E2E8F0]'}`} style={{ backgroundColor: strength >= 1 ? color : undefined }} />
        <div className={`h-1.5 flex-1 rounded-full transition-colors ${strength >= 2 ? '' : 'bg-[#E2E8F0]'}`} style={{ backgroundColor: strength >= 2 ? color : undefined }} />
        <div className={`h-1.5 flex-1 rounded-full transition-colors ${strength >= 3 ? '' : 'bg-[#E2E8F0]'}`} style={{ backgroundColor: strength >= 3 ? color : undefined }} />
      </div>
      <p className="text-xs" style={{ color }}>{label}</p>
    </div>
  );
}
