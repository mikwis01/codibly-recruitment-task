export const ErrorBar = ({ error }: { error: string }) => {
  return (
    <div className="w-5/6 bg-red-500 h-12 max-w-xs flex items-center justify-center rounded-md text-white text-center">
      {error}
    </div>
  )
}
