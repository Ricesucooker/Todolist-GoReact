import {Flex, Spinner, Stack, Text} from "@chakra-ui/react"
import TodoItems from "./TodoItems.tsx";
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from "../App.tsx";

export type Todo ={
    _id: number;
    body: string;
    completed: boolean;
};

function TodoList() {

    const { data: todos, isLoading } = useQuery<Todo[]>({
        queryKey:["todos"],
        queryFn: async() =>{
            try{
                const res = await fetch(BASE_URL + "/todo");
                const data = await res.json()

                if(!res.ok){
                    throw new Error(data.error || "Something went wrong")
                }
                return data ||[];
            } catch (error){
                console.log(error)
            }
        },
    })


  return (
    <>
    <Text fontSize={"4xl"} 
        textTransform={"uppercase"} 
        fontWeight={"bold"} 
        textAlign={"center"} my={2}>
        Todays Task</Text>

        {isLoading && (
				<Flex justifyContent={"center"} my={4}>
					<Spinner size={"xl"} />
				</Flex>
			)}
            {!isLoading && todos?.length === 0 && (
				<Stack alignItems={"center"} gap='3'>
					<Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
						All tasks completed! 🤞
					</Text>
				</Stack>
			)}
			<Stack gap={3}>
				{todos?.map((todo) => (
					<TodoItems key={todo._id} todo={todo} />
				))}
			</Stack>
    </>
  );
};

export default TodoList