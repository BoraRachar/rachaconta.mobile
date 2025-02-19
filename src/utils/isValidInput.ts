import * as yup from 'yup'
import { AnyObjectSchema } from 'yup'

export const isValidInput = (
  schema: AnyObjectSchema,
  fieldName: string,
  value: string,
): boolean => {
  try {
    const fieldSchema = yup.reach(schema, fieldName) as yup.StringSchema
    fieldSchema.validateSync(value)
    return true
  } catch {
    return false
  }
}
