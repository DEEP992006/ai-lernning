import Generate_mcq from "./generate_mcq.js"

export const create_mcq = async (data) => {
    const mcq = await Generate_mcq(data)
    return mcq
}