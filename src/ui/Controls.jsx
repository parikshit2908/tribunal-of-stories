export default function Controls({ actIndex, setActIndex, max, onFinish }) {
  return (
    <div className="controls">
      <button
        onClick={() => setActIndex(actIndex - 1)}
        disabled={actIndex === 0}
      >
        Previous
      </button>
      <button
        onClick={() => {
          if (actIndex === max) {
            onFinish()
          } else {
            setActIndex(actIndex + 1)
          }
        }}
      >
        Next
      </button>
    </div>
  )
}
