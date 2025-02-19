const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emailValidation = (email: string) => regex.test(email)

export default emailValidation
