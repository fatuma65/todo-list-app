import { AuthContext } from "./TodoContext"
import { useContext } from "react"

 const useTodo = () => {
    const context = useContext(AuthContext)
    return context
}
export default useTodo;