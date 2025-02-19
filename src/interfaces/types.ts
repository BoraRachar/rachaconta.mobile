interface Step {
  step: number
  increaseStep: () => void
  decreaseStep: () => void
}

interface UserData {
  nome: string
  email: string
  usuario: string
  password: string
  termosUso: boolean
  politicasPrivacidade: boolean
}

interface ResetPasswordData {
  email: string
  code: number
  novaSenha: string
  confirmacaoSenha: string
}

interface ErrorResponse {
  statusCode: number
  errors: { userMessage: string }[]
}

export { Step, UserData, ResetPasswordData, ErrorResponse }
