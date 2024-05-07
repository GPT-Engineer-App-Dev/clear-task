import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, VStack, Input, IconButton, List, ListItem, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTrash, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <Header />
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <IconButton aria-label="Add todo" icon={<FaPlusCircle />} onClick={handleAddTodo} />
        </HStack>
        <List width="100%" spacing={2}>
          {todos.map((todo, index) => (
            <motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }} layout>
              <ListItem padding={2} boxShadow="md" display="flex" justifyContent="space-between" alignItems="center">
                {todo}
                <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
              </ListItem>
            </motion.li>
          ))}
        </List>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;
