import React, { useState } from "react"
import { styled } from "../../../../../stitches.config"

const FuncionarioList = () => {
    
    const [tipoFuncionarios] = useState([{
        name: 'Vendedor',
        qtd: 50
    },
    {
        name: 'Atendente',
        qtd: 3
    },
    {
        name: 'Estagiario',
        qtd: 5
    },
    {
        name: 'Veterinario',
        qtd: 9
    }])
    return (
        <Container>
            <Header>
                <Title>Funcionários</Title>
                <a href="/funcionarios">Ver detalhes</a>
            </Header>
            <List>
                {tipoFuncionarios.map(profissao => {
                    return (
                        <>
                            <ListItem>
                                <ItemName>{profissao.name}</ItemName>
                                <span>{profissao.qtd}</span>
                                
                            </ListItem>
                            <BreakLine/>
                        </>
                    )
                })}
            </List>
        </Container>
    )
}
const Container = styled('div',{
    width: '50%',
    height: '336px',
    backgroundColor: 'White',
    display: 'flex',
    paddingLeft: 0,
    justifyContent: 'start',
    border: "1px solid #DFE0EB",
    borderRadius: 8,
    paddingTop: 32,
    flexDirection: 'column',
    marginBottom: 50
})
const Header = styled('div',{
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    'a': {
        color: '$primary',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'underline'
        }
    },
    marginBottom: 50
})
const Title = styled('h1',{
    fontWeight: 700,
    fontSize: 19,
    width: '70%',
})

const List = styled('ul',{
    margin: 0,
    padding: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
})
const ListItem = styled('li',{
    marginBottom:  20,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around', 
    overflow: 'hidden',
    '&:span':{
        color: '$text_gray',
        fontSize: 14
    }
})

const BreakLine = styled('div',{
    borderTop: '1px solid',
    borderColor: '$text_gray',
    width: '100%',
    opacity: 0.3,
    marginBottom: 12 
})

const ItemName = styled('div',{
    color: 'black',
    width: '70%',
    fontSize: 14,
    fontWeight: 600
})

export default FuncionarioList