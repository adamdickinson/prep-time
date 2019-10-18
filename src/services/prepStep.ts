import createService from "@adamdickinson/react-service"

import usePrepSteps from "../hooks/usePrepSteps"

const [PrepStepProvider, usePrepStepAPI] = createService(usePrepSteps)

export { PrepStepProvider, usePrepStepAPI }
