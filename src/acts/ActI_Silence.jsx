import { useEffect, useState } from "react"

export default function ActI_Silence() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1800),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 7000),
      setTimeout(() => setStep(4), 9000)
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="act">
      <div className="act-inner">
        {step >= 1 && <p className="fade-in">Most stories travel fast.</p>}
        {step >= 2 && <p className="fade-in">Few travel far.</p>}
        {step >= 3 && <p className="fade-in">This is not a place for rumours.</p>}
        {step >= 4 && <p className="fade-in">This is where stories are judged.</p>}
      </div>
    </section>
  )
}
