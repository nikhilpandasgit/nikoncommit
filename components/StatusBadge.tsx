import { statusConstants } from '../lib/constants';
type StatusType = 'completed' | 'in-progress' | 'planned' | 'paused' | 'abandoned';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const statusConfig: Record<StatusType, 
                      { bg: string; text: string; label: string }> = statusConstants;
  const { bg, text, label } = statusConfig[status];

  return (
    <span className={`text-xs px-2 py-1 ${bg} ${text} rounded-full ${className}`}>
      {label}
    </span>
  );
}
