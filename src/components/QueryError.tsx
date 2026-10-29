import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

type QueryErrorProps = {
  message: string
  onReset: () => void
}

export function QueryError({ message, onReset }: QueryErrorProps) {
  return (
    <Alert variant="destructive" className="p-4">
      <AlertCircle />
      <AlertTitle>Could not load data</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <div className="col-start-2 mt-3">
        <Button type="button" variant="outline" className="min-w-28 px-6" onClick={onReset}>
          Retry
        </Button>
      </div>
    </Alert>
  )
}
