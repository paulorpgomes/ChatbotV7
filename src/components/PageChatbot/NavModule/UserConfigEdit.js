import {
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Avatar,
    VStack,
    Tooltip,
  } from '@chakra-ui/react';
  import { FaRegEdit  } from 'react-icons/fa';
  
  export default function UserConfigEdit() {
    return (
      <VStack spacing={4}>
        <Avatar size={'2xl'} />
        <FormControl>
          <InputGroup>
            <Input
              variant="flushed"
              type="email"
              defaultValue="Nome do usuario" // Valor preenchido por padrão
              fontSize="lg" // Tamanho do texto
              pr="3rem" // Padding right para evitar sobreposição
            />
            <Tooltip
              hasArrow
              label="Você pode alterar seu nome"
              placement="right"
            >
              <InputRightElement width="3rem">
                <FaRegEdit  color="gray" />
              </InputRightElement>
            </Tooltip>
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              variant="flushed"
              type="email"
              defaultValue="email@dousuario.com" // Valor preenchido por padrão
              fontSize="lg" // Tamanho do texto
              pr="3rem" // Padding right para evitar sobreposição
            />
            <Tooltip
              hasArrow
              label="Você pode alterar seu e-mail"
              placement="right"
            >
              <InputRightElement width="3rem">
                <FaRegEdit  color="gray" />
              </InputRightElement>
            </Tooltip>
          </InputGroup>
        </FormControl>
      </VStack>
    );
  }
  