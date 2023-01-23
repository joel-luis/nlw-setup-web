interface ProgressBarProps {
  prrogress: number
}

export function ProgressBar({ prrogress }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábtios completados nesse dia"
        aria-valuenow={prrogress}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${prrogress}%` }}
      />
    </div>
  )
}
