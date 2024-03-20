import { FormProvider, useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { HandPalm, Play } from "phosphor-react"

import { Countdown } from "./components/countdown"
import { NewCycleForm } from "./components/new-cycle-form"

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles"
import { useCyclesContext } from "../../contexts/cycles-context"

const newCycloFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
})

type newCycleFormData = zod.infer<typeof newCycloFormValidationSchema>

export function Home() {
  const {
    createNewCycle,
    activeCycle,
    interruptCurrentCycle
  } = useCyclesContext()

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycloFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  })

  const { reset, watch, handleSubmit } = newCycleForm

  const handleCreateNewCycle = (data: newCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch("task")
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
