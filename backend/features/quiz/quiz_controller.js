import { create_mcq } from "./quiz_service.js"

export const getmcqcontroller = async (req,res) => {
    const {data} = req.body
    const a = await create_mcq(data)
    res.json({"am":a})
}