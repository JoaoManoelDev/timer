import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

import { HistoryContainer, HistoryList, Status } from "./styles"
import { useCyclesContext } from "../../contexts/cycles-context"

export const History = () => {
  const { cycles } = useCyclesContext()

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status $statusColor="green" draggable>Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status $statusColor="red" draggable>Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status $statusColor="yellow" draggable>Em Andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
