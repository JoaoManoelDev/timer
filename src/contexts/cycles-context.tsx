import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react"
import { differenceInSeconds } from "date-fns"

import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction
} from "../reducers/cycles/actions"

interface CycleContextType {
  cycles: Cycle[] | []
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondPassed: number
  createNewCycle: (data: CreateCycleData) => void
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  interruptCurrentCycle: () => void
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

export const CyclesContext = createContext({} as CycleContextType)

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
   () => {
     const storageStateAsJSON = localStorage.getItem(
       "@timer:cycles-state-1.0.0",
     )

     if (storageStateAsJSON
        !== null
        && storageStateAsJSON
        && Object.keys(storageStateAsJSON).length !== 0
      ) {
       return JSON.parse(storageStateAsJSON)
     }

     return {
      "cycles": [],
      "activeCycleId": ""
    }
   },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondPassed, setAmountSecondPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  const createNewCycle = ({ task, minutesAmount }: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondPassed(seconds)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem("@timer:cycles-state-1.0.0", stateJSON)
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        createNewCycle,
        interruptCurrentCycle,
        amountSecondPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export const useCyclesContext = () => {
  const context = useContext(CyclesContext)

  return context
}
