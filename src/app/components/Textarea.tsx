import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[#111827] mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-2.5 bg-white border ${
            error ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
          } rounded-lg text-[#111827] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all resize-none ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[#DC2626]">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-[#64748B]">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
