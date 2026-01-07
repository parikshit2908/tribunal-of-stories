import { useEffect, useState } from "react"
import ActI from "../acts/ActI_Silence"
import ActII from "../acts/ActII_Distinction"
import ActIII from "../acts/ActIII_Lens"
import ActIV from "../acts/ActIV_Evidence"
import ActV from "../acts/ActV_Lineage"
import ActVI from "../acts/ActVI_Presence"
import ActVII from "../acts/ActVII_Exit"

const acts = [
  ActI,
  ActII,
  ActIII,
  ActIV,
  ActV,
  ActVI,
  ActVII
]

const DURATIONS = [
  11000,
  9000,
  9000,
  7000,
  9000,
  8000,
  9000
]

export default function ActMachine({ actIndex, setActIndex, onFinish }) {
  const [state, setState] = useState("visible")
  const CurrentAct = acts[actIndex]

  useEffect(() => {
    setState("hidden")
    const fadeIn = setTimeout(() => setState("visible"), 400)

    const autoNext = setTimeout(() => {
      if (actIndex < acts.length - 1) {
        setActIndex(actIndex + 1)
      } else {
        onFinish()
      }
    }, DURATIONS[actIndex])

    return () => {
      clearTimeout(fadeIn)
      clearTimeout(autoNext)
    }
  }, [actIndex])

  return (
    <div
      className={`cinematic-transition ${
        state === "visible" ? "cinematic-visible" : "cinematic-hidden"
      }`}
    >
      <CurrentAct />
    </div>
  )
}
