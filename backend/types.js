const zod = require("zod");

const create_todo = zod.object({
    title:zod.string(),
    description:zod.string()
})
const update_todo = zod.object({
    id:zod.string()
})

module.exports={
    create_todo,
    update_todo
}
