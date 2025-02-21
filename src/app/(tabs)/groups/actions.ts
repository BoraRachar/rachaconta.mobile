import { axiosClient } from "@/src/utils/axios"

const getCategoriesList = async () => {
  const pageNumber = `metaData.pageNumber=1`
  const pageSize = `metaData.pageSize=200`

  const { data } = await axiosClient.post(
    `categoria/lista-categoria?${pageNumber}&${pageSize}`
  )

  return data
}

export default { getCategoriesList }